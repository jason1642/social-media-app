import React, { useEffect, useState } from 'react';
import { getOnePost, addComment, getAllComments, verifyUser, getOneUser } from '../../Services/api-helper'
import styled from 'styled-components'

const CommentSection = props => {

  // const [postedBy, setPostedBy] = useState()

  // const [currentPost, setCurrentPost] = useState(setPost())



  const [comments, setComments] = useState()
  const getComments = async () => {

    const comments = await getAllComments(props.postId)
    setComments(comments)
    // console.log(comments)
  }
  useEffect(() => {
    console.log(props.currentPost)
    if (props.currentPost) {
      getComments();
    }
    // return null
  }, [])
  console.log(props)
  return (
    <div className="comment-section">


      {comments &&
        comments.map(comment => (
          <React.Fragment key={comment.id}>
            {console.log(comment)}
            <div className='comment-single-box'>
              <h3>
                {/* {this.getCommentUser(comment)} */}
             says:</h3>
              <p>{comment.comment_text}</p>

              <br />
            </div>
          </React.Fragment>
        ))}
    </div>
  )
}

export default CommentSection