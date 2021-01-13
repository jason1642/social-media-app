import React, { useEffect, useState } from 'react';
import { getOnePost, addComment, getAllComments, verifyUser, getOneUser } from '../../Services/api-helper'
import styled from 'styled-components'

const CommentSection = props => {

  const [comments, setComments] = useState()
  let commentsUser = undefined

  const getComments = async () =>
    await getAllComments(props.postId).then(value => value)



  const renderComments = () =>
    comments.map(comment =>
      <React.Fragment key={comment.id}>
        <div className='comment-single-box'>
          <h3>

            {
              // getOneUser(comment)
            }

           says:</h3>
          <p>{comment.comment_text}</p>
          <br />
        </div>
      </React.Fragment>
    )


  useEffect(async () => {
    if (props.currentPost) {
      const myfunc1 = async () => await getComments().then(ele => ele)
      setComments(await myfunc1())
    }


  }, [])
  console.log('pop')
  return (
    <div className="comment-section">


      {comments && renderComments()}
    </div>
  )
}

export default CommentSection