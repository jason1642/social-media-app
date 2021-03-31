import * as React from "react";
import styled from "styled-components";

import EditForm from "./EditForm.jsx";

const Container = styled.div`
  margin-top: 5%;
`;
const Title = styled.h2`
  font-size: 30px;
`;
const EditPage = () => {
  return (
    <Container>
      <Title>Edit Profile</Title>
      <EditForm />
    </Container>
  );
};

export default EditPage;
