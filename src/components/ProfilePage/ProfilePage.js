import React, { Component } from 'react'; 
import './profile.css';  
import { connect } from 'react-redux'  
import {getProfileData, getPosts, getComments} from '../../actions/pageActions'
import Profile from './Profile';
import Post from '../Posts/Post' 

 class ProfilePage extends Component {  
   
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
          if(sortPostElements[i].user_id === this.props.profile.profile.data.id){
            postsElements[i] = 
            <Post id={sortPostElements[i].id}
              key={sortPostElements[i].id} 
              user_id={sortPostElements[i].user_id} 
              create_time={sortPostElements[i].created_at}
              title={sortPostElements[i].title} 
              description={sortPostElements[i].description} 
              numComments = {numComments}/> 
          }
        // console.log(sortPostElements[i].id +' ' + numComments)
    } 
    return( 
      <div className='profile'> 
          <Profile profile={this.props.profile.profile} />
          <div className="profilePosts">  
                { (this.props.profile.profile.data) && 
                // this.props.posts.posts.map(post=> 
                // (post.user_id === this.props.profile.profile.data.id) &&
                //     <Post  key={post.id}
                //           id={post.id} 
                //            user_id={post.user_id} 
                //            create_time={post.created_at}
                //            title={post.title} 
                //            description={post.description}/> )
                      postsElements 
              }
              
           </div> 
      </div>

    );

  }
} 

const mapStateToProps = store =>{ 
  return {
    posts: store.posts,
    profile: store.profile, 
    comments: store.comments,     
  }

}

const mapDispatchToProps = dispatch => {
  return {

    getProfileData: dispatch(getProfileData()), 
    getPosts: dispatch(getPosts()),   
    getComments: dispatch(getComments()),

  }
} 
export default  connect(
  mapStateToProps, 
  mapDispatchToProps)(ProfilePage) 
