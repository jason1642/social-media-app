import React from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const CreatePostBox = () => {

  const Container = styled.div`
    /* border: 1px solid black; */
    background-color: #a3a3a3;
    padding: 5px 0;
    border-radius: 5px;
  `;
  const Input = styled.input`
    /* padding: 8px; */
    border: none;
    border-radius: 5px;
    color : white;
    background-color: #b9b8b8;
    margin-bottom: 16px;
    height: 90%;
  `;

  return (
    <Container>

      <Link to="/posts/new">

        <Input placeholder='Create a post' />
      </Link>
    </Container>

  )
}

export default CreatePostBox