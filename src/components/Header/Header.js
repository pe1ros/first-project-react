import React, { Component } from 'react';  
import './Header.css';
import { NavLink } from 'react-router-dom';   
import {history} from '../../App'     
import { connect } from 'react-redux' 
import {auth} from '../../actions/pageActions'
import { isAuthorized } from '../../auth';
 

class Header extends Component {  
  constructor(props){
    super(props) 
    this.state ={
      isAuth : isAuthorized()
    }
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
              this.state.isAuth && <button onClick={this.onClick}>LogOut</button> 
          }
      </div>
    );
  }
}
const mapStateToProps = store =>{ 
  return {  
    flag: store.auth,     
  }

}

const mapDispatchToProps = dispatch => {
  return {

    auth: flag=> dispatch(auth(flag)),  

  }
} 
export default connect(
  mapStateToProps, 
  mapDispatchToProps)(Header);
