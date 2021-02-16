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



  const [allHTML, setAllHTML] = useState(undefined)
  const [shouldUpdate, setShouldUpdate] = useState(false)
  const [reRendered, setReRendered] = useState(false)
  const [isEditing, setIsEditing] = useState(undefined)
  const [verifiedUser, setVerifiedUser] = useState(undefined)

  const handleEdit = async (index) => {
    await isEditing ? setIsEditing(false) : setIsEditing(true)
    // console.log(renderedHTML)
    // console.log(isEditing)
    let testx = allHTML

    reRendered[index].isEditing = true
    setReRendered(testx)
    setShouldUpdate(true)
    console.log(isEditing)
    // console.log(testx)
    // console.log(renderedHTML[index])
  }


  const renderComments = async () => {
    let testHTML
    await getAllComments(props.postId).then(async value => testHTML = await value.map((comment, i) => {
      return {
        index: i,
        isEditing: false,
        text: <React.Fragment key={comment.id}>
          <Comment>
            <UsernameText>{comment.user.username}
              <DateCreated>{moment(comment.created_at).fromNow()}
              </DateCreated>
            </UsernameText>

            <p>{comment.comment_text}</p>

            <Footer>
              <div>Upvote Boxxx</div>
              {
                verifiedUser ?
                  comment.user.id === verifiedUser.id &&
                  <>
                    <DeleteButton postId={props.postId} comment={comment} />
                    {/* <EditButton handleEdit={() =>
                      handleEdit(i)}
                      postId={props.postId}
                      comment={comment}
                    >Edit</EditButton> */}
                  </>
                  : <></>
              }
            </Footer>
          </Comment>
        </React.Fragment>,
        input: <React.Fragment key={comment.id}>
          <Comment>
            <UsernameText>{comment.user.username}
              <DateCreated>{moment(comment.created_at).fromNow()}
              </DateCreated>
            </UsernameText>
            <><input
              name={i}
              key={comment.id}
              value={comment.comment_text} />{
              }</>
            <Footer>
              <div>Upvote Box</div>
              <DeleteButton postId={props.postId} comment={comment} />
              {/* <EditButton handleEdit={() => handleEdit(i)} postId={props.postId} comment={comment}>Edit</EditButton> */}
            </Footer>
          </Comment>
        </React.Fragment>
      }
    })
    )


    // setAllHTML(testHTML)


    return testHTML
  }


  // setUser()
  useEffect(() => {
    const setUser = async () =>
      await verifyUser().then(v => v)
    setUser().then(v => setVerifiedUser(v))
    console.log('used effect!!01!')

  }, [])

  useEffect(() => {
    renderComments().then(ele => {
      setAllHTML(ele)
    })
  }, [verifiedUser])


  // rerenders if state (isediting variable) is changed
  return (
    <Container>
      {
        allHTML && allHTML.map(ele => ele.isEditing ? ele.input : ele.text)}
    </Container>
  );

}

export default MappedComments;