import React, { Component } from 'react';  
import './Header.css';
import { NavLink } from 'react-router-dom';   
import {history} from '../../App'      
import { isAuthorized } from '../../auth';
import Button from '@material-ui/core/Button'; 
 

class Header extends Component {  
  constructor(props){
    super(props) 
    this.state ={
      isAuth : '',
    }
  } 
  componentDidMount(){
    this.setState({isAuth:isAuthorized()})
  }  
  onClick = () => {
    localStorage.clear()  
    history.push('/loginpage');
  }
 render(){ 
    return (
      <div className="header"> 
          <NavLink to='/mainpage'>Main Page</NavLink>
          <NavLink to='/profilepage'>Profile Page</NavLink>
          <NavLink to='/loginpage'>LogIn/SignIn</NavLink> 
          {
              this.state.isAuth && <Button variant="contained" color="secondary" onClick={this.onClick}>LogOut</Button> 
          }
      </div>
    );
  }
} 
export default Header;
