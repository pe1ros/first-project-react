import React, { Component } from 'react';   
import { connect } from 'react-redux' 
import Comment from './Comment' 
import { onAddComment, getComments } from '../../actions/pageActions';

class CommentForm extends Component { 
    constructor(props){
      super(props)
  
      this.state = {
        "message": '', 
        "commentable_id": this.props.id,
        "commentable_type": 'Post', 
      } 
    } 
    
    changeHandler = (e) => {
      this.setState({[e.target.name]: e.target.value})
    } 
    submitHandler =  (e) =>  {
      e.preventDefault()  
      this.props.onAddComment(this.state)
      getComments()
      
    }  
    showComments = () =>{ 
    }
    render(){ 
      const list = this.props.comments.comments.map(comment=>  
      (comment.commentable_id === this.props.id) ?
       <Comment 
              key={comment.id} 
              user_id={comment.user_id} 
              created_at={comment.created_at}
              message={comment.message}  />  
      : '') 
      const {message} = this.state 
        return (
        <div  >
          <div  >
            <form onSubmit={this.submitHandler} > 
              <h5><p>Текст комментария:<input 
                                  required="required"
                                  type="text" 
                                  name="message" 
                                  value={message} 
                                  onChange={this.changeHandler} /></p></h5>
              <button type="submit">Add_comment</button>
            </form>   
            <button onClick={this.showComments}>Show_comments</button>
          </div>
          <div> 
            {list}
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
      onAddComment: comment => dispatch(onAddComment(comment)),
      getComments: dispatch(getComments()),
         
    }
  } 
export default connect(
    mapStateToProps, 
    mapDispatchToProps)(CommentForm)
