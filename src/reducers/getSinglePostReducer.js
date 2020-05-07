import { GET_SINGLE_POST, PUT_SINGLE_POST } from "../actions/pageActions"

 const initialState = {
    singlePost: '',

}

export function getSinglePostReducer  (state = initialState, action)  { 
    switch (action.type) {
        case GET_SINGLE_POST:
          return { ...state, }
        case PUT_SINGLE_POST:
          return { ...state,  data: action.payload} 
          
        default:
          return state
      }
}