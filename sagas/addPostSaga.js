import {takeEvery} from 'redux-saga/effects'
import { ADD_POST } from '../actions/pageActions'  
  
function fetchAddPost(post){   
    const userData = JSON.parse(localStorage.getItem('userData')) 
     fetch('https://postify-api.herokuapp.com/posts', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
        'Access-Token': userData.token,
        'Client': userData.client,
        'Uid': userData.uid,
      }, 
      body: JSON.stringify(post.payload)
    })
} 
export function* watchAddPost(){ 
    yield takeEvery(ADD_POST, fetchAddPost);
 
} 