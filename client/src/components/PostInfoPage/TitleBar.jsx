import React from 'react';
import styled from 'styled-components'

const TitleBar = props => {
  const Container = styled.div`
    width: 90%;
    height: 40px;
    display: flex;
    justify-content: space-around;
    border: 1px solid black;
    background-color: #000000;
    position: fixed;
    margin: 0;
  `;

  const Title = styled.div`
    text-align: left;
    font-size: 27px;
    margin-left: 20%;
    /* border: 1px solid black; */
    overflow-x: hidden;
    width: 55%;
    color: white;
  `;

  const BackButton = styled.button`
    border: none;
    border-radius: 8px;
    font-size: 22px;
    background-color: #b4b4b4;

  `;
  return (
    <Container>
      <Title>{props.title}</Title>
      <BackButton>Back</BackButton>
    </Container>
  );
}

export default TitleBar;