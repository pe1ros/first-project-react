import React, { Component } from 'react';   
import './registerpage.css'; 
import { NavLink } from 'react-router-dom'; 
import {register} from '../../actions/pageActions'
import { connect } from 'react-redux'  
 
  

class RegisterPage extends Component { 
  constructor(props){
    super(props)

    this.state = {
      email: '',
      password: '', 
      passwordConfirm: '',
      firstName: '',
      lastName: '',
    } 
  } 
  
  changeHandler = (e) => {
    this.setState({[e.target.name]: e.target.value})
  } 
  submitHandler = async (e) =>  {
    e.preventDefault()  
    this.props.register(this.state) 
  }  
  render(){
    const {email, password, passwordConfirm, firstName, lastName} = this.state
 
      return (
      <div className="page">
        <div className="registerpage">
          <form onSubmit={this.submitHandler} > 
            <p>E-mail:<input
                                required="required" type="text" 
                                name="email" 
                                value={email} 
                                onChange={this.changeHandler} /></p>
            <p>Password:<input
                                required="required" type="text" 
                                name="password" 
                                value={password} 
                                onChange={this.changeHandler} /></p>
            <p>Confirm Pass:<input
                                required="required" type="text" 
                                name="passwordConfirm" 
                                value={passwordConfirm} 
                                onChange={this.changeHandler} /></p>
            <p>First name:<input type="text" 
                                name="firstName" 
                                value={firstName} 
                                onChange={this.changeHandler} /></p>
            <p>Last name:<input type="text" 
                                name="lastName" 
                                value={lastName} 
                                onChange={this.changeHandler} /></p>                    
            <button type="submit">Registration</button>
          </form> 

          <button className="left" ><NavLink to='/loginpage'>Cancel</NavLink></button>
        </div>
      </div> 
      )
  } 
} 
const mapDispatchToProps = dispatch => {
  return {
  
    register: data => dispatch(register(data)),

  }
} 
export default connect(
  null, 
  mapDispatchToProps)(RegisterPage)