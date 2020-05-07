import React, { Component } from 'react' 
import './App.css';
import MainPage from './components/MainPage/MainPage'; 
import ProfilePage from './components/ProfilePage/ProfilePage';
import LoginPage from './components/LoginPage/LoginPage'; 
import RegisterPage from './components/RegisterPage/RegisterPage';  
import {isAuthorized} from './auth'
import { Redirect, Route, Router } from 'react-router-dom';  
import { createBrowserHistory } from "history";
import PostPage from './components/PostPage/PostPage'; 
 
export const history = createBrowserHistory();

class App extends Component { 
    
  render() {  
     
    return ( 
      < Router history={history}>
        <div className="App">   
          <Route exact path="/" render={() => ( 
              <Redirect to="/loginpage"/> 
            )
          }/>  
          <Route exact path="/mainpage" render={() => (
            isAuthorized() ? (
              <MainPage />
            ) : (
              <Redirect to="/loginpage"/> 
            )
          )}/>  
          <Route exact path="/profilepage" render={() => (
            isAuthorized() ? (
              <ProfilePage />
            ) : (
              <Redirect to="/loginpage"/>  
            )
          )}/> 
          <Route exact path="/loginpage" render={() => (
            isAuthorized() ? (
              <Redirect to="/mainpage"/>  
            ) : (
              <LoginPage />
            )
          )}/> 
          <Route exact path="/registerpage" render={() => (
            isAuthorized() ? (
              <Redirect to="/mainpage"/>  
            ) : (
              <RegisterPage />
            )
          )}/>  
          <Route path='/post/:id' component={PostPage}/>  
        </div> 
        </ Router>
    );
  }
} 

export default App
