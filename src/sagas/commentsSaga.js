import {takeEvery, put, call} from 'redux-saga/effects'
import { GET_COMMENTS, putComments } from '../actions/pageActions'

async function fetchComments(){
    const userData = JSON.parse(localStorage.getItem('userData'))

    return await fetch('https://postify-api.herokuapp.com/comments', { 
        headers: {
            'Access-Token': userData.token,
            'Client': userData.client,
            'Uid': userData.uid,
          }, 
    }).then(response => response.json()) 
}

function* workerGetComments(){  

    const comments = yield call(fetchComments) 
    yield put(putComments(comments))
 
}
export function* watchGetComments(){ 
    yield takeEvery(GET_COMMENTS, workerGetComments);
}