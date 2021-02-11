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


  const [allHTML, setAllHTML] = useState(undefined)
  let verifiedUser = undefined;
  const setUser = async () => {
    verifiedUser = await verifyUser().then(v => v)
  }

  console.log(verifiedUser)
  const renderComments = async () => {




    return await getAllComments(props.postId).then(value => setAllHTML(value.map(comment =>
      <React.Fragment key={comment.id}>
        <Comment>
          <UsernameText>{comment.user.username}
            <DateCreated>{moment(comment.created_at).fromNow()}
            </DateCreated>
          </UsernameText>
          <p>{comment.comment_text}</p>
          <Footer>
            {console.log(verifiedUser)}
            <div>Upvote Box</div>
            {
              verifiedUser ?
                comment.user.id === verifiedUser.id &&
                <>
                  <button>Delete</button>
                  <button>Edit</button>
                </>
                : <></>
            }

          </Footer>
        </Comment>
      </React.Fragment>
    ))
    )

  }

  // Setting verified user via useState causes a infinite loop
  // Fix later, but this code works
  useEffect(() => {
    setUser()
    console.log(verifiedUser)
    renderComments()
  }, [])


  return (
    <Container>
      {allHTML ? allHTML : <></>}
    </Container>
  );
}

export default MappedComments;