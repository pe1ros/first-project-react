import { ADD_COMMENT } from "../actions/pageActions"
 
 
export function commentReducer  (state = {}, action)  { 
    switch (action.type) { 
        case ADD_COMMENT:  
          return { ...state, post: action.payload} 
          
        default:
          return state
      }
}