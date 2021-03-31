import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 80%;
  height: 46px;
  display: flex;
  justify-content: space-around;
  background-color: #262626;
  position: fixed;
  align-items: center;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  text-align: left;
  font-size: 22px;
  margin-left: 0%;
  /* border: 1px solid black; */
  overflow-x: hidden;
  white-space: nowrap;
  height: 100%;
  width: 70%;
  color: white;
`;

const BackButton = styled(Link)`
  text-decoration: none;
  border: none;
  border-radius: 8px;
  font-size: 22px;
  color: white;
  background-color: transparent;
  /* background-color: #ffffff; */
  &:hover {
    cursor: pointer;
  }
`;

const TitleBar = (props) => {
  return (
    <Container>
      <Title>{props.title}</Title>
      <BackButton to="/">Back</BackButton>
    </Container>
  );
};

export default TitleBar;
