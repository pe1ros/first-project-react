import {takeEvery} from 'redux-saga/effects'
import { CHANGE_POST } from '../actions/pageActions'   
  
async function fetchChangePost(post){  
    const url = 'https://postify-api.herokuapp.com/posts/' + post.payload.id
    const postData = {'title': post.payload.title, 'description':post.payload.description} 
    const userData = JSON.parse(localStorage.getItem('userData')) 
    await fetch(url, {
      method: 'PUT',
      headers: {
          'Content-Type': 'application/json',
        'Access-Token': userData.token,
        'Client': userData.client,
        'Uid': userData.uid,
      }, 
      body: JSON.stringify(postData)
    }) 
     
}  
   
export function* watchChangePost(){ 
    yield takeEvery(CHANGE_POST, fetchChangePost);
 
} 