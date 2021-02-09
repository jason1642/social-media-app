import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import { addComment, verifyUser, getAllComments, getOneUser } from '../../../Services/api-helper'
import moment from 'moment';



const MappedComments = props => {
  const Container = styled.div`
    width: 85%;
    margin: 0 auto;
  `;
  const Comment = styled.div`
    border: 1px solid black;
    margin: 5px 0;
    text-align: left;
    padding-left: 20px;
  `;
  const DateCreated = styled.span`
    font-size: 0.7em;
    margin-left: 7px;
  `;

  const UsernameText = styled.h2`
    font-size: .8em; 
    font-weight: 500;
  `;

  const Footer = styled.div`
    display: flex;
    background-color: wheat;
    align-items: center;
    & > *{
      margin-left: 7px;
    }
    `;


  const [allHTML, setAllHTML] = useState()
  const commentsUsersArray = []
  const [verifiedUser, setVerifiedUser] = useState()

  const getUserName = async (x) => {
    return await getOneUser(x.user_id)
  }

  const getCurrentUser = async () => {
    verifyUser().then(v => setVerifiedUser(v))
    console.log(verifiedUser)
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
          <Footer>
            <div>Upvote Box</div>
            {
              // comment.user.id === verifiedUser.id &&
              <>
                <button>Delete</button>
                <button>Edit</button>
              </>
            }
          </Footer>
        </Comment>
      </React.Fragment>
    )
    )

  useEffect(() => {
    if (props.currentPost) {
      getAllComments(props.postId).then(value => value.map(comment => commentsUsersArray.push(getUserName(comment).then(v => 'string'))))
      renderComments().then(value => setAllHTML(value))
      getCurrentUser()
    }


  }, [])
  return (
    <Container>
      {allHTML && allHTML}
    </Container>
  );
}

export default MappedComments;