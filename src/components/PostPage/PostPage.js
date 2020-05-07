import React, { Component } from 'react'; 
import './postpage.css' 
import { connect } from 'react-redux'  
import {getProfileData, getComments, getSinglePost} from '../../actions/pageActions'
import {changePost} from '../../actions/pageActions'
import CommentForm from '../Comments/CommentForm';
import Button from '@material-ui/core/Button'; 
import TextField from '@material-ui/core/TextField';
import Header from '../../components/Header/Header';


class PostPage extends Component {  
    constructor(props){
        super(props)
    
        this.state = {
          title: '',
          description: '', 
          id: '',
        }  
      }   
    componentDidMount(){ 
        let postId = this.props.match.params.id;
        this.setState({id:postId}) 
        this.fetchPost( postId)
        this.props.getProfileData() 
    }  
    fetchPost(postId){
        if(postId){ 
            this.props.getSinglePost(postId)
        } 
    } 
    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value}) 
      } 
    submitHandler =  (e) =>  {
        e.preventDefault() 
        this.props.changePost(this.state) 
        this.props.getSinglePost(this.state.id) 
        
    }
    render(){ 
        let post = this.props.singlePost.data ? this.props.singlePost.data : ''
        let userId = this.props.profile.profile.data ? this.props.profile.profile.data.id : null   
        const {title, description} = this.state    
        return (  
            <div> 
                <Header />
                <div className='postpage'> 
                    { (post) ?
                            (post.user_id === userId) ?
                            <div >  
                                <div>
                                    <div>
                                        <h3>User_ID: {post.user_id} </h3>
                                        <h3>Add_time: {post.created_at} </h3>
                                    </div> 
                                    <div >
                                        <h3>Заголовок: {post.title} </h3>  
                                    </div>
                                    <div>
                                        <h3>Описание: {post.description} </h3>  
                                    </div> 
                                </div>
                                <div  >
                                    <form onSubmit={this.submitHandler} > 
                                    <TextField label ='Заголовок'
                                                            required
                                                            type="text" 
                                                            name="title" 
                                                            value={title} 
                                                            onChange={this.changeHandler} /> 
                                        <TextField label ='Описание'
                                                            required 
                                                            type="text" 
                                                            name="description" 
                                                            value={description} 
                                                            onChange={this.changeHandler} /> 
                                        <Button variant="contained" color="secondary" type="submit">Изменить</Button>
                                    </form>  
                                </div>
                                <div>
                                    <CommentForm id={this.state.id} /> 
                                </div>
                            </div> : 
                            <div>
                                <div>
                                    <div>
                                        <h3>User_ID: {post.user_id} </h3>
                                        <h3>Add_time: {post.created_at} </h3>
                                    </div> 
                                    <div >
                                        <h3>Заголовок: {post.title} </h3>  
                                    </div>
                                    <div>
                                        <h3>Описание: {post.description} </h3>  
                                    </div> 
                                </div>
                                <div>
                                    <CommentForm id={this.state.id}/> 
                                </div>                          
                            </div> 
                            : 'Нет данных'
                    }
                </div>   
            </div>  
        );
    }
  } 
  const mapStateToProps = store =>{ 
    return {
        singlePost: store.singlePost,
        profile: store.profile, 
        comments: store.comments,
    }
  
  }
  
  const mapDispatchToProps = dispatch => {
    return {  
        getProfileData: profile=>dispatch(getProfileData()),
        getSinglePost: id=> dispatch(getSinglePost(id)),
        getComments: comment=> dispatch(getComments()),
        changePost: post => dispatch(changePost(post))
    }
  } 
  export default  connect(
    mapStateToProps, 
    mapDispatchToProps)(PostPage)  
  