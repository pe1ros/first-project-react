import React, { Component } from 'react';   
import './registerpage.css'; 
import { NavLink } from 'react-router-dom'; 
import {register} from '../../actions/pageActions'
import { connect } from 'react-redux'  
import Button from '@material-ui/core/Button'; 
import TextField from '@material-ui/core/TextField';
 
  

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
        <div  className="page">
        <div className="registerpage">
          <form onSubmit={this.submitHandler} > 
             <TextField label ='E-mail'
                                required  type="text" 
                                name="email" 
                                value={email} 
                                onChange={this.changeHandler} /> 
             <TextField  label ='Password'
                                required  type="text" 
                                name="password" 
                                value={password} 
                                onChange={this.changeHandler} /> 
             <TextField label ='Confirm Pass'
                                required  type="text" 
                                name="passwordConfirm" 
                                value={passwordConfirm} 
                                onChange={this.changeHandler} /> 
             <TextField label ='First name'
                               type="text" 
                                name="firstName" 
                                value={firstName} 
                                onChange={this.changeHandler} /> 
             <TextField label ='Last name'
                               type="text" 
                                name="lastName" 
                                value={lastName} 
                                onChange={this.changeHandler} />                    
            <Button variant="contained" color="primary" type="submit">Регистрация</Button>
          <Button variant="contained" color="secondary" ><NavLink to='/loginpage'>Войти</NavLink></Button>
          </form> 

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