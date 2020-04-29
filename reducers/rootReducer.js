import { combineReducers } from "redux";
import { postsReducer } from "./postsReducer";
import {profileReducer} from './profileReducer'
import { postReducer } from "./postReducer";
import {loginReducer} from './loginReducer'
import {commentsReducer} from './commentsReducer'
import {changePostReducer} from './changePostReducer'
import {commentReducer} from './commentReducer'

export const rootReducer =  combineReducers({
    posts: postsReducer,
    profile: profileReducer,
    post: postReducer,
    login:loginReducer,
    comments: commentsReducer,
    changePost: changePostReducer,
    comment: commentReducer,
})