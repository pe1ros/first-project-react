import React, { Component } from 'react';   
import { connect } from 'react-redux' 
import Comment from './Comment' 
import { onAddComment, getComments, getSinglePost } from '../../actions/pageActions';
import Button from '@material-ui/core/Button'; 
import TextField from '@material-ui/core/TextField';

class CommentForm extends Component { 
    constructor(props){
      super(props)
  
      this.state = {
        message: '', 
        commentable_id: '',
        commentable_type: 'Post', 
        showComments:false, 
        update: false,
      } 
    } 
  componentDidMount(){ 
      this.fetchComments()  
      this.setState({ commentable_id: this.props.id });
  }
  componentDidUpdate() {
      if (this.state.update) { 
          this.fetchComments() 
          this.fetchPost(this.state.commentable_id)
          this.setState({ update: false });
      }
    }  
  fetchComments(){ 
    this.props.getComments()
  } 
  fetchPost(postId){
      if(postId){ 
          this.props.getSinglePost(postId) 
      } 
  }   
    changeHandler = (e) => {
      this.setState({[e.target.name]: e.target.value})
      this.setState({ commentable_id: this.props.id });
    } 
    submitHandler =  (e) =>  {
      e.preventDefault()  
      this.props.onAddComment(this.state)
      this.setState({ update: true }); 
    }  
    showComments = () =>  {   
       return this.props.comments.comments.map(comment=>  
        (comment.commentable_id === Number(this.props.id)) &&
         <Comment 
                key={comment.id} 
                user_id={comment.user_id} 
                created_at={comment.created_at}
                message={comment.message} />  
        ) 
    }
    onClick = () => {
      this.setState({showComments:!this.state.showComments})
    }
    render(){   
      const {message} = this.state 
        return (
        <div  >
          <div  >
            <form onSubmit={this.submitHandler} > 
            <TextField label='Текст комментария' 
                                  required 
                                  type="text" 
                                  name="message" 
                                  value={message} 
                                  onChange={this.changeHandler} /> 
              <Button variant="contained" color="primary" type="submit">Add_comment</Button>
            </form>     
          </div>
          <div>  
            <Button variant="contained" color="primary" onClick={this.onClick}>Show_comments</Button>   
            {   this.state.showComments && this.showComments()}
          </div>
        </div> 
        )
    } 
  }  
  const mapStateToProps = store =>{ 
    return { 

      comments: store.comments,
    }
  
  }
  
  const mapDispatchToProps = dispatch => {
    return {
      getSinglePost: id=> dispatch(getSinglePost(id)),
      onAddComment: comment => dispatch(onAddComment(comment)),
      getComments: comment=> dispatch(getComments()),
         
    }
  } 
export default connect(
    mapStateToProps, 
    mapDispatchToProps)(CommentForm)
