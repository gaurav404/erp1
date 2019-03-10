import {SET_MESSAGE_STATE,CATCH_ERROR} from './types'

export const setMessage = (message)=>dispatch=>{
  dispatch({
    type:SET_MESSAGE_STATE,
    payload:message
  })
}

export const setError = (err)=>dispatch=>{
  dispatch({
    type:CATCH_ERROR,
    payload:err
  })
}
