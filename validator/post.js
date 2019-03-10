const validator = require('validator');
const isEmpty = require('./isEmpty');
module.exports = function validatePostInput(data){
  const error = {};
  data.text = !isEmpty(data.text)?data.text:'';
  if(!validator.isLength(data.text,{min:20})){
    error.text = 'post got to be minimum 20 characters'
  }
  if(validator.isEmpty(data.text)){
    error.text = 'text field is required'
  }
  return {
    error,
    isValid : isEmpty(error)
  }
}
