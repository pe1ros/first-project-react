import React, { Component } from 'react';  
import './main.css';     
import Post from '../Posts/Post';  
import { connect } from 'react-redux' 
import {getProfileData, getPosts, getComments} from '../../actions/pageActions' 
import FormPost from '../Posts/FormPost';

 class MainPage extends Component { 
  componentDidMount() {
    getPosts(); 
  } 
  render(){
    const sortPostElements = this.props.posts.posts.sort((a, b) => b.id - a.id)  
    let numComments
    let postsElements =[]
    for (let i =0; i<sortPostElements.length;i++){
      numComments = 0;
        for (let j =0; j<this.props.comments.comments.length;j++){
            if(sortPostElements[i].id === this.props.comments.comments[j].commentable_id) 
              numComments++   
        }
            postsElements[i] = 
            <Post id={sortPostElements[i].id}
              key={sortPostElements[i].id} 
              user_id={sortPostElements[i].user_id} 
              create_time={sortPostElements[i].created_at}
              title={sortPostElements[i].title} 
              description={sortPostElements[i].description} 
              numComments = {numComments}/>
        // console.log(sortPostElements[i].id +' ' + numComments)
    }
    // const postsElements = sortPostElements.map(post=>   
    //     <Post id={post.id}
    //     key={post.id} 
    //     user_id={post.user_id} 
    //     create_time={post.created_at}
    //     title={post.title} 
    //     description={post.description} 
    //     numComments = {this.numComments}/>)  
    return( 
      <div className='main'> 
        Количество постов:  {postsElements ? postsElements.length : ''}
       <div className='main2'>
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
    comments: store.comments,  
  }

}

const mapDispatchToProps = dispatch => {
  return {

    getComments: dispatch(getComments()),
    getPosts: dispatch(getPosts()), 
    getProfileData: dispatch(getProfileData()),

  }
}  
export default  connect(
  mapStateToProps, 
  mapDispatchToProps)(MainPage)