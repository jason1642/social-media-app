import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: white;
  width: 85%;
  margin: 0 auto;
`;

const TextInput = styled.textarea`
  width: 100%;
  min-height: 90px;
  /* overflow: scroll; */
  border: 1px solid black;
  resize: vertical;
  text-align: left;
  padding: 5px 0 50px 5px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

const CommentInput = (props) => {
  const [userInput, setUserInput] = useState();

  useEffect(() => {
    // console.log(userInput)
  }, [userInput]);

  console.log("RERENDERED");
  return (
    <Container>
      <TextInput
        key="12er"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        placeholder="Write a comment"
        onFocus={function (e) {
          var val = e.target.value;
          e.target.value = "";
          e.target.value = val;
        }}
        autoFocus
      />
      <button onClick={() => props.submitComment(userInput)}>submit</button>
    </Container>
  );
};

export default CommentInput;
