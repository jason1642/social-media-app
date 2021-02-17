import React from 'react';
import styled from 'styled-components'


const MappedImagesTable = props => {

  const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: flex-start;
    background-color: white;
  `;
  const Image = styled.img`
  margin-top: 100px;
  height: 190px;
  &:hover{
    cursor: pointer;
  }
`;
  const SubmitButton = styled.div`
    display: flex;
    align-items: center;
    font-size: 20px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-color: #7dcfad;
    height: 50px;
    text-align: center;
    padding: 25px;
  `;
  return (
    <Container>
      {
        props.imageList.map(ele => <>
          <div onClick={() => props.handleClickImage(ele.source, ele.name)}>
            <Image src={ele.source} />
          </div>
        </>)
      }
      <SubmitButton onClick={() => console.log('submitted!')}>Submit!</SubmitButton>
    </Container>
  );
}

export default MappedImagesTable;