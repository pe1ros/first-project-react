import { REGISTRATION } from "../actions/pageActions"

 const initialState = {  

}

export function registerReducer  (state = initialState, action)  {
    switch (action.type) {
        case REGISTRATION:
          return { ...state, userData: action.payload } 
      
        default:
          return state
      }
}