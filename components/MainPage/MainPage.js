import React, { Component } from 'react';  
import './main.css';     
import Post from '../Posts/Post';  
import { connect } from 'react-redux' 
import {getProfileData, getPosts} from '../../actions/pageActions' 
import FormPost from '../Posts/FormPost';

 class MainPage extends Component {   

  render(){
    const sortPostElements = this.props.posts.posts.sort((a, b) => b.id - a.id)
    const postsElements = sortPostElements.map(post=> 
   <Post id={post.id}
          key={post.id} 
          user_id={post.user_id} 
          create_time={post.created_at}
          title={post.title} 
          description={post.description}/>) 
    return( 
      <div className='main'> 
        Количество постов:  {postsElements.length}
       <div>
         <FormPost />
       </div>
        <div>
           {postsElements} 
        </div>
      </div>
    );
  }
} 

const mapStateToProps = store =>{ 
  return {
    posts: store.posts,  
  }

}

const mapDispatchToProps = dispatch => {
  return {

    getPosts: dispatch(getPosts()), 
    getProfileData: dispatch(getProfileData()),  

  }
}  
export default  connect(
  mapStateToProps, 
  mapDispatchToProps)(MainPage)