import React from 'react';
import styled from 'styled-components';

const Form = styled.form`
  /* background-color: blue; */
  border: 1px solid black;
`;
const Container = styled.div`
  display: flex;
  width: 50%;
  justify-content: space-evenly;
  flex-direction: column;
  margin: 0 auto;
`;
const Label = styled.p`
  font-size: 28px;
`;
const SubmitButton = styled.button``;
const Input = styled.input`
  margin: 0 auto;

  width: 60%;
`;
const InputRow = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid black;
  margin: 20px 0;
`;
const EditForm = (props) => {
  return (
    <Form onSubmit={() => alert('submitted')}>
      <Container>
        {/*  */}
        <InputRow>
          <Label>Email</Label>
          <Input />
        </InputRow>
        {/*  */}
        <InputRow>
          <Label>Bio</Label>
          <Input />
        </InputRow>
        {/*  */}
      </Container>
      <SubmitButton>Save Changes</SubmitButton>
    </Form>
  );
};

export default EditForm;
