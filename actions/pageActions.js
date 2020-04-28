export const LOG_IN = 'LOG_IN'
export const REGISTRATION = 'REGISTRATION'
export const GET_POSTS = 'GET_POSTS'
export const PUT_POSTS = 'PUT_POSTS'
export const GET_COMMENTS = 'GET_COMMENTS'
export const PUT_COMMENTS = 'PUT_COMMENTS'
export const ADD_POST = 'ADD_POST'
export const CHANGE_POST = 'CHANGE_POST'
export const GET_PROFILE_DATA = 'GET_PROFILE_DATA'
export const PUT_PROFILE_DATA = 'PUT_PROFILE_DATA'


export function getPosts() {
    return {
      type:  GET_POSTS, 
    }
}
export function putPosts(posts){
    return {
        type: PUT_POSTS,
        payload: posts,

    }
}
export function getComments() {
    return {
      type:  GET_COMMENTS, 
    }
}
export function putComments(comments){
    return {
        type: PUT_COMMENTS,
        payload: comments,

    }
}
export function onAddPost(post){ 
    return { 
        type: ADD_POST,
        payload: post,
    }
}
export function changePost(post){ 
    return { 
        type: CHANGE_POST,
        payload: post,
    }
}
export function getProfileData( ){
    return {
        type: GET_PROFILE_DATA, 
    }
}
export function putProfileData(profileData){
    return {
        type: PUT_PROFILE_DATA, 
        payload: profileData,
    }
}
export function login (userData){ 
    return { 
        type: LOG_IN,
        payload: userData,
    }
}
export function register (userData){ 
    return { 
        type: REGISTRATION,
        payload: userData,
    }
}
