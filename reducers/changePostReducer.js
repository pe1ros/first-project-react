import { CHANGE_POST } from "../actions/pageActions"
 
 
export function changePostReducer  (state = {}, action)  { 
    switch (action.type) { 
        case CHANGE_POST:  
          return { ...state, post: action.payload} 
          
        default:
          return state
      }
}