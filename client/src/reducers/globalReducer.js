import {SET_MESSAGE_STATE} from '../actions/types'
const initialState = {
  message:''
}
export default function(state=initialState,action){
  switch(action.type){
    case SET_MESSAGE_STATE:{
      return{
        ...state,
        message:action.payload
      }
    }
    default:{
      return {...state}
    }
  }
}
