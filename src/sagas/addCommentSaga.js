import {takeEvery} from 'redux-saga/effects'
import { ADD_COMMENT,   } from '../actions/pageActions'   
  
async function fetchAddComment(comment){ 
    const userData = JSON.parse(localStorage.getItem('userData')) 
     await fetch('https://postify-api.herokuapp.com/comments', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
        'Access-Token': userData.token,
        'Client': userData.client,
        'Uid': userData.uid,
      }, 
      body: JSON.stringify(comment.payload)
    })    
  } 
 
export function* watchAddComment(){ 
    yield takeEvery(ADD_COMMENT, fetchAddComment);
 
} 