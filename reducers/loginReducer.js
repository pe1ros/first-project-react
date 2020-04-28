import { LOG_IN } from "../actions/pageActions"

 const initialState = {  

}

export function loginReducer  (state = initialState, action)  {
    switch (action.type) {
        case LOG_IN:
          return { ...state, userData: action.payload } 
      
        default:
          return state
      }
}