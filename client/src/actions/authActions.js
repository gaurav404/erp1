import {SET_MESSAGE_STATE} from './types'
import {SET_USER} from './types'
import axios from 'axios'

export const setUser = (user)=>dispatch=>{
  dispatch({
    type:SET_USER,
    payload:user
  })
}
export const logout = ()=>dispatch=>{
  axios.post('/api/logout').then(res=>{
    console.log(res.data);
    dispatch({
      type:SET_MESSAGE_STATE,
      payload:res.data
    })
  })
}
