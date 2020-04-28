import React from 'react';     
import './comment.css' 

function Comment(props) {    
  return ( 
      <div className='comment'>  
        <div  >
            ID : {props.user_id}
        </div>
        <div  >
            TIME : {props.created_at}
        </div>
        <div>
            TEXT : {props.message} 
        </div>   
    </div>     
    
  );
} 

export default Comment;
