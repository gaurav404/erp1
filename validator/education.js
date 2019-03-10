const validator = require('validator');
const isEmpty = require('./isEmpty');
module.exports = function validateEducationInput(data){
  const error = {};
  data.school = !isEmpty(data.school)?data.school:'';
  data.degree = !isEmpty(data.degree)?data.degree:'';
  data.fieldofstudy = !isEmpty(data.fieldofstudy)?data.fieldofstudy:'';
  data.from = !isEmpty(data.from)?data.from:'';
  if(validator.isEmpty(data.school)){
    error.school = 'school is required'
  }
  if(validator.isEmpty(data.degree)){
    error.degree = 'degree is required'
  }
  if(validator.isEmpty(data.fieldofstudy)){
    error.fieldofstudy = 'fieldofstudy is required'
  }
  if(validator.isEmpty(data.from)){
    error.from = 'from Date is required'
  }
  return {
    error,
    isValid : isEmpty(error)
  }
}
