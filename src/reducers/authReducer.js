import { AUTH } from "../actions/pageActions"

 const initialState = {  
    flag: true,
}

export function authReducer  (state = initialState, action)  {
    switch (action.type) {
        case AUTH:
          return { flag: action.payload } 
      
        default:
          return state
      }
}