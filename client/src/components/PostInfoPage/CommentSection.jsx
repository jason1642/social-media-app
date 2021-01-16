import React, { useEffect, useState } from 'react';
import { getOnePost, addComment, getAllComments, getOneUser } from '../../Services/api-helper'

const CommentSection = props => {

  const [comments, setComments] = useState()
  const [allHTML, setAllHTML] = useState()

  const getComments = async () =>
    await getAllComments(props.postId).then(value => value)

  const getUserName = async (x) => {
    return await getOneUser(x.user_id)
  }

  const renderComments = async () =>
    await getAllComments(props.postId).then(value => value.map(comment =>
      <React.Fragment key={comment.id}>
        <div className='comment-single-box'>
          <h3>

            {
              getUserName(comment) !== null
              &&
              getUserName(comment).then(v => console.log(v))
            }

           says:</h3>
          <p>{comment.comment_text}</p>
          <br />
        </div>
      </React.Fragment>
    )
    )


  useEffect(() => {
    if (props.currentPost) {
      // const myfunc1 = async () => await getComments().then(ele => ele)
      // setComments(await myfunc1())
      renderComments().then(value => setAllHTML(value))
    }


  }, [])
  return (
    <div className="comment-section">


      {allHTML && allHTML}
    </div>
  )
}

export default CommentSection