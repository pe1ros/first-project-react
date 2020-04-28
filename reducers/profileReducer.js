import {GET_PROFILE_DATA, PUT_PROFILE_DATA} from '../actions/pageActions'

const initialState = {
    profile:{
        email: '',
        firs_name: '',
        last_name: '',
    },

}

export function profileReducer  (state = initialState, action)  {
    switch (action.type) {
        case GET_PROFILE_DATA:
          return { ...state }
        case PUT_PROFILE_DATA:
            return { ...state, profile: action.payload}
      
        default:
          return state
      }
}