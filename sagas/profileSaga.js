import {takeEvery, put, call} from 'redux-saga/effects'
import { GET_PROFILE_DATA, putProfileData } from '../actions/pageActions'

async function fetchProfile(){
    const userData = JSON.parse(localStorage.getItem('userData'))

    return await fetch('https://postify-api.herokuapp.com/users/me ', { 
        headers: {
            'Access-Token': userData.token,
            'Client': userData.client,
            'Uid': userData.uid,
          }, 
    }).then(response => response.json()) 
}

function* workerGetProfile(){  

    const profileData = yield call(fetchProfile)   
     
    yield put(putProfileData(profileData))
 
}
export function* watchGetProfile(){ 
    yield takeEvery(GET_PROFILE_DATA, workerGetProfile);
}