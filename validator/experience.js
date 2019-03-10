const validator = require('validator');
const isEmpty = require('./isEmpty');
module.exports = function validateExperienceInput(data){
  const error = {};
  data.title = !isEmpty(data.title)?data.title:'';
  data.company = !isEmpty(data.company)?data.company:'';
  data.position = !isEmpty(data.position)?data.position:'';
  data.from = !isEmpty(data.from)?data.from:'';
  if(validator.isEmpty(data.title)){
    error.title = 'title is required'
  }
  if(validator.isEmpty(data.company)){
    error.company = 'company is required'
  }
  if(validator.isEmpty(data.position)){
    error.position = 'position is required'
  }
  if(validator.isEmpty(data.from)){
    error.from = 'from Date is required'
  }
  return {
    error,
    isValid : isEmpty(error)
  }
}
