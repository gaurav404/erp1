const validator = require('validator');
const isEmpty = require('./isEmpty');
module.exports = function validateProfileInput(data){
  const error = {};
  data.handle = !isEmpty(data.handle)?data.handle:'';
  data.status = !isEmpty(data.status)?data.status:'';
  data.skills = !isEmpty(data.skills)?data.skills:'';
  if(!validator.isLength(data.handle,{min:2,max:40})){
    error.handle = 'handle should be between 2 and 40 characters'
  }
  if(validator.isEmpty(data.skills)){
    error.skill = 'skill is required'
  }
  if(validator.isEmpty(data.status)){
    error.status = 'status is required'
  }
  if(validator.isEmpty(data.handle)){
    error.handle = 'handle is required'
  }
  if(!isEmpty(data.twitter)){
    if(!validator.isURL(data.twitter)){
      error.twitter = 'not a valid url';
    }
  }
  if(!isEmpty(data.facebook)){
    if(!validator.isURL(data.facebook)){
      error.facebook = 'not a valid url';
    }
  }
  if(!isEmpty(data.instagram)){
    if(!validator.isURL(data.instagram)){
      error.instagram = 'not a valid url';
    }
  }
  if(!isEmpty(data.linkedin)){
    if(!validator.isURL(data.linkedin)){
      error.linkedin = 'not a valid url';
    }
  }
  if(!isEmpty(data.websites)){
    if(!validator.isURL(data.websites)){
      error.websites = 'not a valid url';
    }
  }
  return {
    error,
    isValid : isEmpty(error)
  }
}
