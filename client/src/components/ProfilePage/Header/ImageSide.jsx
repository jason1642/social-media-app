import React from "react";
import styled from "styled-components";

const Avatar = styled.img`
  height: 100%;
  width: 100%;
  border: 1px solid black;
  margin: 15px auto;
  border-radius: 50%;
`;
const Container = styled.div`
  /* border: 1px solid black; */
  margin-right: 30px;
  flex-grow: 0.2;
`;

const ImageBox = styled.div`
  height: 150px;
  width: 150px;
  border-radius: 50%;
`;
const ImageSide = (props) => {
  return (
    <Container>
      <ImageBox>
        {props.currentUser && (
          <Avatar src={props.currentUser.image} alt={props.currentUser.image} />
        )}
      </ImageBox>
    </Container>
  );
};

export default ImageSide;
