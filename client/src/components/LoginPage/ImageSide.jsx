import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import treeLogo from '../../resources/images/full-tree-logo.png'
import TextLoop from "react-text-loop";
import Logo from '../../resources/images/post-tree-logo.png'

const Container = styled.div`
  /* border: 1px solid black;
  background-color: grey; */
  height: 50%;
  display: flex;
  flex-direction: column;
  width: 50%;

`

const Title = styled.h3`
  font-size: 5em;
  color: white;
  /* margin: 0 auto; */
  text-align: center;
  /* width: 60%; */
  /* font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif; */
`
const TextLoopBox = styled(TextLoop)`
  display: flex;
  justify-content: space-around;
  /* padding: 200px; */
  margin: 0 auto;
  width: 100%;
  /* border: 1px solid black; */
  /* position: relative; */
  /* left: 0; */
`

const ImageSide = () => {



  return (
    <Container>
      {/* <div ><Image src={treeLogo} alt='' /></div> */}
      {/* <Title>Welcome</Title> */}
      <TextLoopBox
        // style={{ margin: "auto 0", textAlign: "center" }}
        interval={4000}
        springConfig={{
          stiffness: 120,
          damping: 14,
          // precision: 10
        }}
      // children={["Make posts", "Talk about stuff", "Look at stuff"]}
      >
        <Title>Make posts</Title>
        <Title>Talk about stuff</Title>
        <Title>Look at stuff</Title>
      </TextLoopBox>


      {/* Image by <a href="https://pixabay.com/users/openclipart-vectors-30363/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=576847">OpenClipart-Vectors</a>
 from
      <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=576847">Pixabay</a> */}


    </Container>
  );
}

export default ImageSide;