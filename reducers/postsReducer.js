import { GET_POSTS, PUT_POSTS } from "../actions/pageActions"

 const initialState = {
    posts: [],

}

export function postsReducer  (state = initialState, action)  {
    switch (action.type) {
        case GET_POSTS:
          return { ...state }
        case PUT_POSTS:
          return { ...state, posts: action.payload} 
          
        default:
          return state
      }
}