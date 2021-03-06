import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  /* border: 1px solid black; */
  background-color: #f1f1f1;
  padding: 5px 0;
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  align-content: left;
  height: 45px;
`;
const Input = styled.input`
  /* padding: 8px; */
  border: none;
  border-radius: 5px;
  color: white;
  background-color: #ffffff;
  margin-bottom: 16px;
  height: 90%;
  width: 96%;
  padding-left: 10px;
  align-self: left;
`;
const InputLink = styled(Link)`
  width: 100%;
  display: flex;
  justify-self: left;
  text-decoration: none;
`;
const Icon = styled.img`
  height: 90%;
`;

const IconContainer = styled.div`
  height: 100%;
  margin: 0 10px;
`;

const CreatePostBox = (props) => {
  return (
    <Container>
      <IconContainer>
        {/* <Icon src='https://i.pinimg.com/originals/0c/3b/3a/0c3b3adb1a7530892e55ef36d3be6cb8.png' alt='user icon' /> */}
        <Icon src={props.currentUser.image} alt="pfp" />
      </IconContainer>
      <InputLink to="/posts/new">
        <Input placeholder="Create a post" />
      </InputLink>
    </Container>
  );
};

export default CreatePostBox;
