import {takeEvery, put, call} from 'redux-saga/effects'
import { GET_POSTS, putPosts } from '../actions/pageActions'

async function fetchPosts(){
    const userData = JSON.parse(localStorage.getItem('userData'))

    return await fetch('https://postify-api.herokuapp.com/posts/', { 
        headers: {
            "Content-Type": "application/json",
            'Access-Token': userData.token,
            'Client': userData.client,
            'Uid': userData.uid,
          }, 
    }).then(response => response.json()) 
}

function* workerGetPosts(){  

    const posts = yield call(fetchPosts)

    yield put(putPosts(posts))
 
}
export function* watchGetPosts(){ 
    yield takeEvery(GET_POSTS, workerGetPosts);
}