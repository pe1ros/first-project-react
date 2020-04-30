import React from 'react';     
import './post.css'
import { NavLink } from 'react-router-dom';   

function Post(props) {   
  return ( 
      <div className='post'> 
      <NavLink to={{ pathname: "/postpage/" + props.id ,
                    props:props }}>
        <div  >
            Заголовок : {props.title}
        </div>
        <div>
            Описание: {props.description} 
        </div>  
        <div>
            Количество комментариев: {props.numComments}
        </div>
    </NavLink> 
    </div>     
    
  );
} 

export default Post;
