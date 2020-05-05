import {takeEvery} from 'redux-saga/effects'
import { LOG_IN } from '../actions/pageActions'  
import {history} from '../App'     

async function fetchLogin(userData){ 
    let response =  await fetch('https://postify-api.herokuapp.com/auth/sign_in', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(userData.payload)
    });   
    if(response.ok){ 
      const Data = {
        token: response.headers.get('Access-Token'),
        client: response.headers.get('Client'),
        uid: response.headers.get('Uid'), 
      }   
      localStorage.clear()
      localStorage.setItem('userData',JSON.stringify(Data)) 
         
      history.push('/mainpage');
      
    }
    else{
      localStorage.clear()
      alert("НЕ ПРАВИЛЬНЫЙ ЛОГИН ИЛИ ПАРОЛЬ!!!") 
    }  
}  
export function* watchLogin(){ 
    yield takeEvery(LOG_IN, fetchLogin);
 
} 