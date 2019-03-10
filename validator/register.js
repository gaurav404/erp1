const validator = require('validator');
const isEmpty = require('./isEmpty');
module.exports = function validateRegisterInput(data){
  const error = {};
  data.email = !isEmpty(data.email)?data.email:'';
  data.password = !isEmpty(data.password)?data.password:'';
  data.password2 = !isEmpty(data.password2)?data.password2:'';

  if(!validator.isEmail(data.email)){
    error.email = 'email is not valid'
  }
  if(!validator.isLength(data.password,{min:6,max:30})){
    error.password = 'password must be atleast 6 character'
  }
  if(validator.isEmpty(data.email)){
    error.email = 'email is required'
  }
  if(!validator.equals(data.password,data.password2)){
    error.password2 = 'password and confirm password should match'
  }
  if(validator.isEmpty(data.password)){
    error.password = 'password is required'
  }
  return {
    error,
    isValid : isEmpty(error)
  }
}
