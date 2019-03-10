const validator = require('validator');
const isEmpty = require('./isEmpty');
module.exports = function validateLoginInput(data){
  const error = {};
  data.email = !isEmpty(data.email)?data.email:'';
  data.password = !isEmpty(data.password)?data.password:'';
  if(!validator.isEmail(data.email)){
    error.email = 'email is not valid'
  }
  if(validator.isEmpty(data.email)){
    error.email = 'email is required'
  }
  if(validator.isEmpty(data.password)){
    error.password = 'password is required'
  }
  return {
    error,
    isValid : isEmpty(error)
  }
}
