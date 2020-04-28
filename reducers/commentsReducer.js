import { GET_COMMENTS, PUT_COMMENTS } from "../actions/pageActions"

 const initialState = {
    comments: [],

}

export function commentsReducer  (state = initialState, action)  {
    switch (action.type) {
        case GET_COMMENTS:
          return { ...state }
        case PUT_COMMENTS:
          return { ...state, comments: action.payload} 
          
        default:
          return state
      }
}