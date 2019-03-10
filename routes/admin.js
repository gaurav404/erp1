const express = require('express');

const admin = require('../controllers/admin');
const { check, body } = require('express-validator/check');

const router = express.Router();

router.get('/api/register', admin.getRegister);
router.post('/api/register',admin.postRegister);
router.get('/api/register/:token', admin.getNewPassword);
router.post('/api/new-password', admin.postNewPassword);

router.get('/api/login', admin.getLogin);

router.post(
  '/api/login',
  // [
  //   body('email')
  //     .isEmail()
  //     .withMessage('Please enter a valid email address.')
  //     .normalizeEmail(),
  //   body('password', 'Password has to be of min 5 letter and alphanumeric')
  //     .isLength({ min: 5 })
  //     .isAlphanumeric()
  //     .trim()
  // ],
  admin.postLogin
);

router.post('/api/logout', admin.postLogout);

module.exports = router;
