import React from 'react';     
import './comment.css' 

function Comment(props) {    
  return ( 
      <div className='comment'>  
        <div  >
            User_Id : {props.user_id}
        </div>
        <div  >
            Time : {props.created_at}
        </div>
        <div>
            Message : {props.message} 
        </div>   
    </div>     
    
  );
} 

export default Comment;
