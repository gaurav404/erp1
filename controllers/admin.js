const crypto = require('crypto');
const validateLogin = require('../validator/login');
const validateRegister = require('../validator/register');
const bcrypt = require('bcryptjs');
const nodemailer = require('nodemailer');
const sendgridTransport = require('nodemailer-sendgrid-transport');
const { validationResult } = require('express-validator/check');
const db= require('../util/database');
const secret=require('../SecretKeys/secKeys');


const transporter = nodemailer.createTransport(
  sendgridTransport({
    auth: {
      api_key:
        secret.sendgrid
    }
  })

);

exports.getLogin = (req, res, next) => {
  let message = req.flash('error');
  if (message.length > 0) {
    message = message[0];
  } else {
    message = null;
  }
  res.render('auth/login', {
    path: '/login',
    pageTitle: 'Login',
    errorMessage: message,
    oldInput: {
      email: '',
      password: ''
    },
    validationErrors: []
  });
};


exports.postLogin = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  console.log(email,password);
  const {error,isValid} = validateLogin(req.body);
  console.log(error);
  if(!isValid){
    return res.status(400).json(error);
  }

  //console.log(email,password);
  db.execute('select * from login where email= ?' , [email])
    .then(([user]) => {
      if (user.length==0) {
        return res.status(400).json({email: 'email not found'});
      }

      if (password == user[0].password) {
        req.session.isLoggedIn = true;
        req.session.email= user[0].email;
        req.user = user[0];
         console.log('passssss');
         return res.json({
           user:req.user
         });
         //return res.redirect('/');
      }
      console.log('goneeee');
      return res.status(400).json({password: 'Invalid password.'});
      })
      .catch(err => {
        //console.log(err);
        res.redirect('/login');
      });
  };




exports.getRegister = (req, res, next) => {
  let message = req.flash('error');
  if (message.length > 0) {
    message = message[0];
  } else {
    message = null;
  }
  res.render('auth/register', {
    path: '/register',
    pageTitle: 'Register',
    errorMessage: message
  });
};



exports.postRegister = (req, res, next) => {
  console.log('registering');
  console.log('bodyyyy:',req.body);
  //req.body.email='gaurav.agarwala19@gmail.com'
  crypto.randomBytes(32, (err, buffer) => {
    if (err) {
      return res.status(400).json({
        error:"cannot generate hash key"
      });
    }
    const token = buffer.toString('hex');
    console.log(token);
    db.execute('select * from login where email= ?',[req.body.email])
      .then(([user]) => {
        if (user.length==0) {
          return res.status(400).json({
            error:'No account with that email found.'
          });
        }
        const tokenExpire= Date.now() +3600000;
        //console.log('user:', user[0] );
       console.log(req.body.email, user[0].email);
        return db.execute('update login SET token= ? , tokenExpire= ? WHERE email= ?' , [token, tokenExpire, req.body.email])
      .then(([result]) => {
          transporter.sendMail({
            to: req.body.email.toString(),
            from: 'nickhifi20@gmail.com',
            subject: 'Password set for new user',
            text: 'ERP Project',
            html: `
            <hr>
              <h1> SET YOUR PASSWORD </h1>
              <h2>You try to register to ERP portal</h2>
              <h3>Click this <a href="http://localhost:3000/register/${token}">link</a> to set a new password.</h3>
              <hr>
            `
          })
          .then((ss)=>
          {
            res.json({
              success: 'check your inbox for password set',
              token
            })
          }).catch(err =>
          {
            throw new Error(err);
          })
        })
      }).catch(err => {
        console.log(err);
      });
  });
};



exports.postNewPassword = (req, res, next) => {
  const {error,isValid} = validateRegister(req.body);
  if(!isValid){
    return res.status(400).json(error);
  }
  const newPassword = req.body.password;
  const confirmPassword = req.body.password2;
  const email = req.body.email;
  const token = req.body.token;

 db.execute('select * from login where email= ? AND token= ? ', [email, token])
    .then(([user]) => {
     return db.execute('update login set password= ? , token= ? , tokenExpire= ? where email= ? ', [newPassword, null , null, email] )
        }).then(([result]) => {
          res.json({message:'success'});
          // res.redirect('/login');

    })
    .catch(err => {
      console.log(err);
    });
};



exports.getNewPassword = (req, res, next) => {
  const token = req.params.token;
  db.execute('select * from login where token= ? ', [token])
   .then(([user]) => {
      let message = req.flash('error');
      if(message.length > 0){
        message = message[0];
      }
      else {
        message = null;
      }
      if (user.length==0) {
            return res.render('auth/new-password' , {message: 'your token has been expired', path: '/new-password',
            pageTitle: 'New Password',
            errorMessage: message,
            email: '',
            token: ''});
      }
      res.render('auth/new-password', {
        path: '/new-password',
        pageTitle: 'New Password',
        errorMessage: message,
        email: user[0].email,
        token: token,
        message:''
      });
    })
    .catch(err => {
      console.log(err);
    });
};

exports.postLogout = (req, res, next) => {
  console.log("hrer");
  req.session.destroy(err => {
    //console.log(err);
    res.json({message:'you are now logged out'});

  });
  console.log(req.user);
};
