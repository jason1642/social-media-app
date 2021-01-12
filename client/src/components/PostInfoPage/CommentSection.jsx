import React, { useEffect, useState } from 'react';
import { getOnePost, addComment, getAllComments, verifyUser, getOneUser } from '../../Services/api-helper'
import styled from 'styled-components'

const CommentSection = props => {

  const [comments, setComments] = useState()
  const [mappedCommentSection, setMappedCommentSection] = useState()
  let commentsUser = undefined

  const getComments = async () => {
    let test1 = await getAllComments(props.postId).then(value => commentsUser = value)
    return test1
  }



  const renderComments = () =>
    comments.map(comment =>
      <React.Fragment key={comment.id}>
        <div className='comment-single-box'>
          <h3>

            {(async () => {
              console.log(await getOneUser(comment).then(value => commentsUser = value.data.username))
              await getOneUser(comment).then(value => commentsUser = value.data.username)
              return await commentsUser
            })()}

           says:</h3>
          <p>{comment.comment_text}</p>

          <br />
        </div>
      </React.Fragment>
    )


  useEffect(async () => {
    if (props.currentPost) {
      const myfunc1 = async () => await getComments().then(ele => ele)
      // console.log(await myfunc1())
      // setComments(await myfunc1())
    }


  }, [])
  console.log(mappedCommentSection)
  console.log(comments)
  return (
    <div className="comment-section">


      {comments && renderComments()}
    </div>
  )
}

export default CommentSection