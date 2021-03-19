import React from 'react';
import styled from 'styled-components'
import treeLogo from '../../resources/images/full-tree-logo.png'

const Container = styled.div`
  /* border: 1px solid black; */
  display: flex;
  flex-direction: column;
  width: 40%;
`
const Image = styled.img`
  height: 400px;
  width: auto;

`
const Title = styled.h3`
  font-size: 2.6em;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
`
const ImageSide = () => {
  return (
    <Container>
      {/* <div ><Image src={treeLogo} alt='' /></div> */}
      {/* <Title>Welcome</Title> */}
      {/* Image by <a href="https://pixabay.com/users/openclipart-vectors-30363/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=576847">OpenClipart-Vectors</a>
 from
      <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=576847">Pixabay</a> */}

    </Container>
  );
}

export default ImageSide;