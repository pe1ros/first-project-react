import React, { Component } from 'react';     
import './post.css'
import { Link } from 'react-router-dom';   

class Post extends Component {   
  constructor(props){
    super(props)
    this.state = {
      id: ''
    }
  } 
  render(){ 
    return ( 
      <div className='post'> 
          <Link to={{ pathname: "/postpage/" + this.props.id ,
                      props:this.props }}>
          <div  >
              Заголовок : {this.props.title}
          </div>
          <div>
              Описание: {this.props.description} 
          </div>  
          <div>
              Количество комментариев: {this.props.numComments}
          </div>
          </Link> 
      </div>     
      
    );
  }
} 

export default Post;
