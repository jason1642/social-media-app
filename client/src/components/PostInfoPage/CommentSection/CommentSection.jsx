import React, { useState, useEffect } from "react";
import { addComment } from "../../../Services/api-helper";
import styled from "styled-components";
import MappedComments from "./MappedComments";
import "./CommentSection.css";
import CommentInput from "./CommentInput";
// Using React Hooks with onchange functions to create comment submission
// functionality creates bugs with unwanted rerenders of this component

const Container = styled.div`
  margin: 0 auto;
  /* border: 1px solid black; */
  width: 100%;
  margin: 0 auto;
`;
const AddCommentTitle = styled.div`
  text-align: left;
  width: 85%;
  margin: auto auto;
  padding: 8px 0 8px 0;
`;

// If user input in empty, reject post request
const CommentSection = (props) => {
  const handleSubmit = async (commentText) => {
    //comment post request reqires post_id, comment_id, string
    console.log("SUBMITTED");
    console.log(props);
    await addComment({
      comment_text: commentText,
      user_id: props.currentUser.id,
      post_id: props.postId,
    });
    setShouldUpdate(true);
  };

  const [shouldUpdate, setShouldUpdate] = useState(false);

  useEffect(() => {
    setShouldUpdate(false);
  }, []);
  // const [commentText, setCommentText] = useState('')

  // Submits the completed form to api-helper create
  console.log(props);

  return (
    <>
      <Container>
        <div className="comment-input-box">
          <AddCommentTitle>
            Comment as <b>{props.currentUser.username}</b>
          </AddCommentTitle>
          <CommentInput submitComment={handleSubmit} />
          {/* <div className='comment-input-footer'> */}

          {/* </div> */}
        </div>

        <MappedComments
          currentPost={props.currentPost}
          postId={props.postId}
          currentUser={props.currentUser}
          shouldUpdate={shouldUpdate}
        />
      </Container>
    </>
  );
};

export default CommentSection;
