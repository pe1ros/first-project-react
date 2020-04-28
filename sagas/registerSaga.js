import {takeEvery} from 'redux-saga/effects'
import { REGISTRATION } from '../actions/pageActions'  
import {history} from '../App'  
  
async function fetchRegister(userData){ 
    let response =  await fetch('https://postify-api.herokuapp.com/auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(userData.payload)
    });   

  console.log(userData.payload)
  console.log(response)
    if(response.ok){ 
       
      history.push('/loginpage');
      
    }
    else{ 
      alert("ЧТО-ТО ПОШЛО НЕ ТАК") 
    }  
} 
export function* watchRegister(){ 
    yield takeEvery(REGISTRATION, fetchRegister);
 
} 