import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import { verifyUser, getAllComments, destroyComment } from '../../../Services/api-helper'
import moment from 'moment'; // library to display how long ago comment was posted
import DeleteButton from './DeleteButton'
import EditButton from './EditButton'

const MappedComments = props => {
  const Container = styled.div`
    width: 85%;
    margin: 0 auto;
  `;
  const Comment = styled.div`
    border: 1px solid black;
    background-color: white;
    border-radius: 4px;
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
    margin-bottom: 5px;
    /* background-color: wheat; */
    align-items: center;
    & > *{
      margin-left: 7px;
    }
    `;


  const [isEditing, setIsEditing] = useState(false)
  const handleEdit = () =>
    isEditing ? setIsEditing(false) : setIsEditing(true)





  const [allHTML, setAllHTML] = useState(undefined)
  let verifiedUser = undefined;
  const setUser = async () => {
    verifiedUser = await verifyUser().then(v => v)
  }

  const renderComments = async () => {
    return await getAllComments(props.postId).then(value => setAllHTML(value.map(comment =>
      <React.Fragment key={comment.id}>
        <Comment>
          <UsernameText>{comment.user.username}
            <DateCreated>{moment(comment.created_at).fromNow()}
            </DateCreated>
          </UsernameText>

          {
            isEditing ?
              <><input key={comment.id} value={comment.comment_text} />{
                // console.log(this.key)
              }</>
              :
              <p>{comment.comment_text}</p>
          }

          <Footer>
            <div>Upvote Box</div>
            {
              verifiedUser ?
                comment.user.id === verifiedUser.id &&
                <>
                  <DeleteButton postId={props.postId} comment={comment} />
                  <EditButton handleEdit={handleEdit} postId={props.postId} comment={comment}>Edit</EditButton>
                </>
                : <></>
            }

          </Footer>
        </Comment>
      </React.Fragment >
    ))
    )

  }

  // Setting verified user via useState causes a infinite loop
  // Fix later, but this code works
  useEffect(() => {
    setUser()
    renderComments()
  }, [isEditing])


  return (
    <Container>
      {allHTML ? allHTML : <></>}
    </Container>
  );
}

export default MappedComments;