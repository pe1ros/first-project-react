import { ADD_POST } from "../actions/pageActions"
 
 
export function postReducer  (state = {}, action)  { 
    switch (action.type) { 
        case ADD_POST:  
          return { ...state, post: action.payload} 
          
        default:
          return state
      }
}