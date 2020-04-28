import React, { Component } from 'react'; 
import './profile.css';  
import { connect } from 'react-redux'  
import {getProfileData, getPosts} from '../../actions/pageActions'
import Profile from './Profile';
import Post from '../Posts/Post' 

 class ProfilePage extends Component {  
   
  render(){     
    return( 
      <div className='profile'> 
          <Profile profile={this.props.profile.profile} />
          <div className="profilePosts">  
                { (this.props.profile.profile.data) ? this.props.posts.posts.map(post=> 
                (post.user_id === this.props.profile.profile.data.id) &&
                    <Post  key={post.id}
                          id={post.id} 
                           user_id={post.user_id} 
                           create_time={post.created_at}
                           title={post.title} 
                           description={post.description}/> ) : ''
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
    
  }

}

const mapDispatchToProps = dispatch => {
  return {

    getProfileData: dispatch(getProfileData()), 
    getPosts: dispatch(getPosts()), 

  }
} 
export default  connect(
  mapStateToProps, 
  mapDispatchToProps)(ProfilePage) 
