import React, { Component } from 'react';   
import './loginpage.css'; 
import { NavLink } from 'react-router-dom'; 
import {login} from '../../actions/pageActions'
import { connect } from 'react-redux'  

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
      <div className="page">
        <div className="loginpage">
          <form onSubmit={this.submitHandler} > 
            <p>Login____:<input
                                required="required" type="text" 
                                name="email" 
                                value={email} 
                                onChange={this.changeHandler} /></p>
            <p>Password:<input
                                required="required" type="text" 
                                name="password" 
                                value={password} 
                                onChange={this.changeHandler} /></p>
            <button type="submit">LogIn</button>
          </form> 
          <button className="left"><NavLink to='/registerpage'>Registration</NavLink></button>
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