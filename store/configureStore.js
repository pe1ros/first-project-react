
import {createStore, applyMiddleware} from 'redux'
import {rootReducer } from '../reducers/rootReducer' 
import logger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import { watchGetPosts } from '../sagas/postsSaga';
import {watchGetProfile} from '../sagas/profileSaga'  
import {watchAddPost} from '../sagas/addPostSaga'
import {watchLogin} from '../sagas/loginSaga'
import {watchRegister} from '../sagas/registerSaga'
import {watchGetComments} from '../sagas/commentsSaga'
import {watchChangePost} from '../sagas/changePostSaga'

const sagaMiddleware = createSagaMiddleware();
export const store = createStore(rootReducer,applyMiddleware(sagaMiddleware,logger) )  
sagaMiddleware.run(watchGetPosts)
sagaMiddleware.run(watchGetProfile) 
sagaMiddleware.run(watchAddPost) 
sagaMiddleware.run(watchLogin) 
sagaMiddleware.run(watchRegister) 
sagaMiddleware.run(watchGetComments) 
sagaMiddleware.run(watchChangePost) 