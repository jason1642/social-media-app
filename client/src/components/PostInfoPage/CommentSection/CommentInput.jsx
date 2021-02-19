import React, { useEffect, useState } from 'react';
import styled from 'styled-components'


const CommentInput = props => {

  const Container = styled.button`
    background-color: white;
  
  `;

  const TextInput = styled.input`
    width: 100%;
    min-height: 90px;
    overflow-y: visible;
  `;

  const [userInput, setUserInput] = useState()
  const [HTML, setHTML] = useState()

  const renderHTML = () => {
    const test = <TextInput
      type='textarea'
      value={userInput}
      name='commentText'
      onChange={(e) => setUserInput(e.target.value)}
      placeholder='Write a comment'
      autoFocus
    />
    setHTML(test)
    return test
  }
  useEffect(() => {
    console.log("USE EFFECT")
    renderHTML()
  }, [userInput])

  console.log("RERENDERED")
  return (
    <Container>
      {HTML}
      <button
        onClick={() => props.submitComment(userInput)}>submit</button>
    </Container>
  );
}

export default CommentInput;