import React, { Component } from 'react';   
import './loginpage.css'; 
import { NavLink } from 'react-router-dom'; 
import {login} from '../../actions/pageActions'
import { connect } from 'react-redux'  
import Button from '@material-ui/core/Button'; 
import TextField from '@material-ui/core/TextField';
import Header from '../../components/Header/Header';

class LoginPage extends Component { 
  constructor(props){
    super(props)

    this.state = {
      email: '',
      password: '', 
    } 
  } 
  
  changeHandler = (e) => {
    this.setState({[e.target.name]: e.target.value})
  } 
  submitHandler = (e) =>  {
    e.preventDefault()  
    this.props.login(this.state)  
  }  
  render(){
    const {email, password} = this.state
      return (
      <div> 
        <Header />  
        <div className="page">
          <div className="loginpage">
            <form onSubmit={this.submitHandler} > 
              <TextField label='LogIn' 
                                  required  
                                  type="text" 
                                  name="email" 
                                  value={email} 
                                  onChange={this.changeHandler} /> 
              <TextField  label='Password'
                                  required 
                                  type="text" 
                                  name="password" 
                                  value={password} 
                                  onChange={this.changeHandler} /> 
              <Button type="submit" variant="contained" color="secondary">Войти</Button> 
              <Button variant="contained" color="primary" className="left">
                <NavLink to='/registerpage'>Регистрация</NavLink>
                </Button> 
            </form> 
          </div>
        </div> 
      </div>
      )
  } 
} 
const mapDispatchToProps = dispatch => {
  return {
  
    login: data => dispatch(login(data)), 

  }
} 
export default connect(
  null, 
  mapDispatchToProps)(LoginPage);  