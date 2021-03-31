import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import ImageSide from "./ImageSide";
import BioSide from "./BioSide";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 200px;
  border-radius: 5px;
  margin: 0 auto;
  margin-top: 40px;
  padding: 50px;
  padding-bottom: 0;
  /* background-color: #a6c3a6; */
  margin-bottom: 35px;
  justify-content: space-around;
  width: 100%;
`;

const SideBar = (props) => {
  return (
    <Container>
      {/*  */}
      <ImageSide currentUser={props.currentUser} />

      {/*  */}
      <BioSide currentUser={props.currentUser} />
    </Container>
  );
};

export default SideBar;
