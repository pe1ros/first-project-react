import React, { Component } from 'react';  
import './Header.css';
import { NavLink } from 'react-router-dom';   
 

class Header extends Component { 
  constructor(){
    super()
    this.state ={
      isAuth: false
    }
  }

  onClick = () => {
    localStorage.clear()
    this.setState({isAuth:!this.state.isAuth})
  }
 render(){ 
    return (
      <div className="header"> 
          <NavLink to='/mainpage'>Main Page</NavLink>
          <NavLink to='/profilepage'>Profile Page</NavLink>
          <NavLink to='/loginpage'>LogIn/SignIn</NavLink> 
          {
            <button onClick={this.onClick}>LogOut</button> 
          }
      </div>
    );
  }
}
export default Header;
