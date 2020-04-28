import {takeEvery} from 'redux-saga/effects'
import { CHANGE_POST, getPosts } from '../actions/pageActions'  
import {history} from '../App'  
  
function fetchChangePost(post){  
    const url = 'https://postify-api.herokuapp.com/posts/' + post.payload.id
    const postData = {'title': post.payload.title, 'description':post.payload.description}
    console.log(postData)
    const userData = JSON.parse(localStorage.getItem('userData')) 
    fetch(url, {
      method: 'PUT',
      headers: {
          'Content-Type': 'application/json',
        'Access-Token': userData.token,
        'Client': userData.client,
        'Uid': userData.uid,
      }, 
      body: JSON.stringify(postData)
    }) 
    getPosts()
    setTimeout(timeout,500)
     
} 

 function timeout (){
   history.push('/mainpage')
  }
   
export function* watchChangePost(){ 
    yield takeEvery(CHANGE_POST, fetchChangePost);
 
} 