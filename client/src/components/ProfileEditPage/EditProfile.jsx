import * as React from 'react';
import styled from 'styled-components';

import EditForm from './EditForm/EditForm.jsx';

const Container = styled.div`
  margin-top: 5%;
`;
const Title = styled.h2`
  font-size: 30px;
  font-weight: 300;
`;
const EditPage = props => {
  return (
    <Container>
      <Title>Edit Profile</Title>
      <EditForm currentUser={props.currentUser} />
    </Container>
  );
};

export default EditPage;
