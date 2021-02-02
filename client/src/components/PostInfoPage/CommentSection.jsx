import React, { useEffect, useState } from 'react';
import { getAllUsersPosts, getOnePost, getAllPosts, addComment, getAllComments, getOneUser } from '../../Services/api-helper'

const CommentSection = props => {

  const [comments, setComments] = useState()
  const commentsUsersArray = []
  const [allHTML, setAllHTML] = useState()

  const getComments = async () =>
    await getAllComments(props.postId).then(value => value)

  const getUserName = async (x) => {
    return await getOneUser(x.user_id)
  }

  const getPosts = async () =>
    await getAllPosts()

  const renderComments = async () =>
    await getAllComments(props.postId).then(value => value.map(comment =>
      <React.Fragment key={comment.id}>
        <div className='comment-single-box'>
          <h3>{comment.user.username} says:</h3>
          <p>{comment.comment_text}</p>
          <br />
        </div>
      </React.Fragment>
    )
    )

  console.log(getOneUser(2))
  console.log(getPosts())
  useEffect(() => {
    if (props.currentPost) {
      getAllComments(props.postId).then(value => value.map(comment => commentsUsersArray.push(getUserName(comment).then(v => 'string'))))
      // const myfunc1 = async () => await getComments().then(ele => ele)
      // setComments(await myfunc1())
      renderComments().then(value => setAllHTML(value))
    }


  }, [])

  // console.log(allHTML)
  return (
    <div className="comment-section">


      {allHTML && allHTML}
    </div>
  )
}

export default CommentSection