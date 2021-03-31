import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router';
import styled from 'styled-components';
import { patchUser } from '../../../Services/api-helper';
import Swal from 'sweetalert2'; // alert library - prompts user y/n to delete

// Component for several rows for label and input, using
// an aside element technique to align inputs vertically

// Uses getElementById to get input values during submission to prevent
// unnecessary re-rendering
const Aside = styled.aside`
  padding: 0 12px;
  text-align: right;
  flex: 0 0 124px;
`;
const Label = styled.label`
  font-size: 28px;
`;
const Container = styled.div``;
const InputContainer = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: flex-start;
`;
const Input = styled.input`
  /* margin: 0 auto; */
  width: 60%;
  height: 28px;
  padding-left: 5px;
`;
const Row = styled.div`
  display: flex;
  flex-direction: row;
  /* border: 1px solid black; */
  margin: 20px 0;
  /* justify-content: space-between; */
  /* height: 55px; */
  font-size: 2em;
  padding: 0 10px;
`;
const TextArea = styled.textarea`
  width: 60%;
  /* height: 28px; */
  font-size: 0.7em;
  padding-left: 5px;
  resize: vertical;
  border: 1px solid grey;
  border-radius: 1px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;

const SubmitButton = styled.button`
  color: white;
  background-color: #0095f6;
  border-radius: 4px;
  padding: 5px 9px;
  border: none;
  font-weight: 600;
`;
const InputRow = props => {
  let timerInterval;
  const [email, setEmail] = useState();
  const [bio, setBio] = useState();

  const handleUserUpdate = async (id, userData) =>
    await patchUser(id, userData);

  useEffect(() => {
    console.log('rerender');
  }, []);
  console.log('rerender');
  return (
    <Container>
      {/*  */}
      <Row>
        <Aside>
          <Label>Email</Label>
        </Aside>
        <InputContainer>
          <Input
            defaultValue={props.currentUser.email}
            placeholder={props.currentUser.email}
            id="edit-user-input-email"
          />
        </InputContainer>
      </Row>
      {/*  */}
      <Row>
        <Aside>
          <Label>Bio</Label>
        </Aside>
        <InputContainer>
          <TextArea
            id="edit-user-input-bio"
            defaultValue={props.currentUser.bio}
            placeholder={props.currentUser.bio}
          />
        </InputContainer>
      </Row>
      {/*  */}
      <Row>
        <Aside></Aside>
        <SubmitButton
          onClick={() => {
            handleUserUpdate(props.currentUser.id, {
              email: document.getElementById('edit-user-input-email').value,
              bio: document.getElementById('edit-user-input-bio').value,
            })
              .then(e => {
                Swal.fire({
                  title: 'Your changes were saved.',
                  html: '<b></b>',
                  icon: 'success',
                  timer: 2000,
                  timerProgressBar: false,
                  didOpen: () => {
                    Swal.showLoading();
                    timerInterval = setInterval(() => {
                      const content = Swal.getContent();
                      if (content) {
                        const b = content.querySelector('b');
                        if (b) {
                          // b.textContent = Swal.getTimerLeft()
                        }
                      }
                    }, 100);
                  },
                  willClose: () => {
                    clearInterval(timerInterval);
                  },
                });
                setTimeout(() => {
                  window.location.reload();
                  return <Redirect to="/profile" />;
                }, 1800);
              })
              .catch(err =>
                Swal.fire({
                  title: 'There was an error, please fix one of your inputs.',
                  html: '<b></b>',
                  icon: 'error',
                  timer: 1800,
                  timerProgressBar: false,
                  didOpen: () => {
                    Swal.showLoading();
                    timerInterval = setInterval(() => {
                      const content = Swal.getContent();
                      if (content) {
                        const b = content.querySelector('b');
                        if (b) {
                          // b.textContent = Swal.getTimerLeft()
                        }
                      }
                    }, 1000);
                  },
                  willClose: () => {
                    clearInterval(timerInterval);
                  },
                })
              );
          }}
        >
          Save Changes
        </SubmitButton>
      </Row>
      {/*  */}
    </Container>
  );
};

export default InputRow;
