import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import { getAllPosts, addComment, getAllComments, getOneUser } from '../../../Services/api-helper'
import moment from 'moment';



const MappedComments = props => {
  const Comment = styled.div`
    border: 1px solid black;
    margin: 5px 0;
    text-align: left;
    padding-left: 20px;
  `;
  const DateCreated = styled.span`
    font-size: 0.7em;
    margin-left: 9px;
  `;

  const UsernameText = styled.h2`
    font-size: .8em; 
    font-weight: 500;
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
          <UsernameText>{comment.user.username}
            <DateCreated>{moment(comment.created_at).fromNow()}
            </DateCreated>
          </UsernameText>
          <p>{comment.comment_text}</p>
          <br />
        </Comment>
      </React.Fragment>
    )
    )
  useEffect(() => {
    if (props.currentPost) {
      getAllComments(props.postId).then(value => value.map(comment => commentsUsersArray.push(getUserName(comment).then(v => 'string'))))
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