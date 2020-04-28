import React, { Component } from 'react'; 
import './profile.css';     

class Profile extends Component {
    render(){   
    return( 
        <div className='profile'> 
            <div >
                <div>
                    First_Name: {this.props.profile.data ? this.props.profile.data.firs_name : ''}
                </div>
        
                <div> 
                    Last_Name: {this.props.profile.data ? this.props.profile.data.last_name : ''}
                </div>
        
                <div> 
                    E-mail: {this.props.profile.data ? this.props.profile.data.email : ''}
                </div>
            </div>
           
        </div>
      );
    }
} 

export default Profile;