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
          <Link to={ "/post/" + this.props.post.id}>
          <div  >
              Заголовок : {this.props.post.title}
          </div>
          <div>
              Описание: {this.props.post.description} 
          </div>  
          <div>
              Количество комментариев:   {this.props.comments.length}
          </div>
          </Link> 
      </div>     
      
    );
  }
} 

export default Post;
