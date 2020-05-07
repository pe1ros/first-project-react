export const filterComments = (postId, comments) => {
    var postComments = comments.filter( 
      (c) => c.commentable_id === postId 
    );
 
    return postComments   
  };
  