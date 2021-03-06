import React from 'react';
import styled from 'styled-components';
import { patchUser } from '../../Services/api-helper';

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
  &:hover {
    cursor: pointer;
  }
`;

const MappedImagesTable = props => {
  const handleUserUpdate = async (id, userData) =>
    await patchUser(id, userData);

  const SubmitButton = styled.div`
    display: flex;
    align-items: center;
    font-size: 20px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-color: #7dcfad;
    height: 50px;
    text-align: center;
    padding: 25px;
    &:hover {
      cursor: pointer;
    }
  `;
  return (
    <Container>
      {props.imageList.map(ele => (
        <>
          <div onClick={() => props.handleClickImage(ele.source, ele.name)}>
            <Image src={ele.source} />
            <p>{ele.name}</p>
          </div>
        </>
      ))}

      <SubmitButton
        onClick={() => {
          // console.log(`Submitting ${props.mainImage}`)
          handleUserUpdate(props.currentUser.id, { image: props.mainImage });
          props.history.push('/');
          window.location.reload();
        }}
      >
        Submit!
      </SubmitButton>
    </Container>
  );
};

export default MappedImagesTable;
