import React from 'react';
import { patchComment } from '../../../Services/api-helper'
import styled from 'styled-components'

const EditButton = props => {
  // props = postId, comment
  // post id number and comment data object
  const Button = styled.button`
  
  `;

  return (
    <>{props.comment &&
      <Button
        onClick={props.handleEdit}
      >
        Edit
      </Button>
    }
    </>
  );
}

export default EditButton;