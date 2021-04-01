import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import InputRows from './InputRows';

// Edit for to alter profile data

const Form = styled.div`
  /* border: 1px solid black; */
`;
const Container = styled.div`
  display: flex;
  width: 50%;
  justify-content: space-evenly;
  flex-direction: column;
  margin: 0 auto;
`;

const ChangeButton = styled(Link)`
  text-decoration: none;
  color: black;
  &:hover {
    color: grey;
  }
`;
const ImageContainer = styled.div`
  height: 120px;
  width: 120px;
  border-radius: 50%;
  margin: 20px auto;
  border: 1px solid black;
`;
const Image = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 50%;
`;

const EditForm = props => {
  return (
    <Form>
      <Container>
        <div>
          <ImageContainer>
            <Image src={props.currentUser.image} />
          </ImageContainer>
          <ChangeButton to="/profile/change_avatar">
            Change Profile Picture
          </ChangeButton>
        </div>
        {/*  */}
        <InputRows currentUser={props.currentUser} />
      </Container>
    </Form>
  );
};

export default EditForm;
