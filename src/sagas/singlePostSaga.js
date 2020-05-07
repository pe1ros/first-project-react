import {takeEvery, put, call} from 'redux-saga/effects'
import { GET_SINGLE_POST, putSinglePost } from '../actions/pageActions'
import {history} from '../App'     

async function fetchPost(id){ 
    const userData = JSON.parse(localStorage.getItem('userData'))

    return await fetch('https://postify-api.herokuapp.com/posts/' + id.payload , { 
        headers: {
            "Content-Type": "application/json",
            'Access-Token': userData.token,
            'Client': userData.client,
            'Uid': userData.uid,
          }, 
    }).then(response => 
        (response.ok) ? response.json() : history.push('/mainpage'))
} 
function* workerGetPost(id){  

    const post = yield call(fetchPost,id)
    yield put(putSinglePost(post)) 

 
}
export function* watchSinglePost(){ 
    yield takeEvery(GET_SINGLE_POST, workerGetPost);
}
 