import React, { Component } from 'react';     
import './comment.css' 

class Comment extends Component {    
  render(){
    return ( 
        <div className='comment'>  
          <div  >
              User_Id : {this.props.user_id}
          </div>
          <div  >
              Time : {this.props.created_at}
          </div>
          <div>
              Message : {this.props.message} 
          </div>   
      </div>     
      
    );
  }
} 

export default Comment;
