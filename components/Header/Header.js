import React, { Component } from 'react';  
import './Header.css';
import { NavLink } from 'react-router-dom';   
 

class Header extends Component { 
 render(){ 
    return (
      <div className="header"> 
          <NavLink to='/mainpage'>Main Page</NavLink>
          <NavLink to='/profilepage'>Profile Page</NavLink>
          <NavLink to='/loginpage'>LogIn/SignIn</NavLink> 
          {
            this.props.isAuth && <button onClick={()=>  localStorage.clear() }>LogOut</button> 
          }
      </div>
    );
  }
}
export default Header;
