import {combineReducers} from 'redux'
import authReducer from './authReducer'
import errorReducer from './errorReducer'
import profileReducer from './profileReducer'
import globalReducer from './globalReducer'

export default combineReducers({
  auth: authReducer,
  error:errorReducer,
  profile:profileReducer,
  message:globalReducer
})
