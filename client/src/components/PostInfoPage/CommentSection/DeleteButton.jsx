import React from 'react';
import styled from 'styled-components'
import { destroyComment } from '../../../Services/api-helper'
import Swal from 'sweetalert2' // alert library - prompts user y/n to delete


const DeleteButton = props => {
  //props = [postId, comment]
  let timerInterval

  const handleDeleteComment = async (postId, commentId) => {
    // const askToDelete = confirm("are you sure?")
    return await destroyComment(postId, commentId)
  }

  return (
    <>
      { props.comment ?
        <>
          <button onClick={() =>
            Swal.fire({
              title: 'Are you sure you want to delete this comment?',
              text: '',
              icon: 'warning',
              showCancelButton: true,
              confirmButtonText: 'Yes, delete it!',
              cancelButtonText: 'No, keep it'
            }).then((result) => {
              if (result.value) {
                handleDeleteComment(props.postId, props.comment.id)
                Swal.fire({
                  title: 'Deleting',
                  html: '<b></b>',
                  icon: 'success',
                  timer: 700,
                  timerProgressBar: false,
                  didOpen: () => {
                    Swal.showLoading()
                    timerInterval = setInterval(() => {
                      const content = Swal.getContent()
                      if (content) {
                        const b = content.querySelector('b')
                        if (b) {
                          // b.textContent = Swal.getTimerLeft()
                        }
                      }
                    }, 100)
                  },
                  willClose: () => {
                    clearInterval(timerInterval)
                  }
                })
                // For more information about handling dismissals please visit
                // https://sweetalert2.github.io/#handling-dismissals
              } else if (result.dismiss === Swal.DismissReason.cancel) {
                Swal.fire({
                  title: 'Cancelled',
                  html: '<b></b>',
                  icon: 'error',
                  timer: 700,
                  timerProgressBar: false,
                  didOpen: () => {
                    Swal.showLoading()
                    timerInterval = setInterval(() => {
                      const content = Swal.getContent()
                      if (content) {
                        const b = content.querySelector('b')
                        if (b) {
                          // b.textContent = Swal.getTimerLeft()
                        }
                      }
                    }, 100)
                  },
                  willClose: () => {
                    clearInterval(timerInterval)
                  }
                })
              }
            })
          }>Delete</button>
        </>
        : <></>
      }
    </>
  )
}

export default DeleteButton;