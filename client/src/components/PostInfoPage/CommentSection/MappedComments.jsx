import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import { getAllPosts, addComment, getAllComments, getOneUser } from '../../../Services/api-helper'



const MappedComments = props => {
  const Comment = styled.div`
    border: 1px solid black;
    margin: 5px 0;
    text-align: left;
    padding-left: 50px;
  `;



  const [allHTML, setAllHTML] = useState()
  const commentsUsersArray = []

  const getUserName = async (x) => {
    return await getOneUser(x.user_id)
  }

  const renderComments = async () =>

    await getAllComments(props.postId).then(value => value.map(comment =>
      <React.Fragment key={comment.id}>
        <Comment>
          <h3>{comment.user.username} says:</h3>
          <p>{comment.comment_text}</p>
          <br />
        </Comment>
      </React.Fragment>
    )
    )
  useEffect(() => {
    if (props.currentPost) {
      getAllComments(props.postId).then(value => value.map(comment => commentsUsersArray.push(getUserName(comment).then(v => 'string'))))
      // const myfunc1 = async () => await getComments().then(ele => ele)
      // setComments(await myfunc1())
      renderComments().then(value => setAllHTML(value))
    }


  }, [])

  return (
    <>
      {allHTML && allHTML}
    </>
  );
}

export default MappedComments;