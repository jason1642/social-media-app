import React, { Component, useState, useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import PostInfoPage from '../PostInfoPage/PostInfoPage.jsx'
import LoginPage from '../LoginPage/LoginPage';
import Register from '../Register/Register';
import { getAllComments, getAllPosts, postPost, putPost, destroyPost, loginUser, verifyUser } from '../../Services/api-helper';
import PostEditPage from '../PostEditPage/PostEditPage.jsx';
import ProfilePage from '../ProfilePage/ProfilePage.jsx'
import HomePage from '../HomePage/HomePage.jsx'
import CreatePost from '../CreatePost/CreatePost.jsx'
import ChangeAvatar from '../ProfilePage/ChangeAvatar/ChangeAvatar'

const Container = props => {



  const [currentUser, setCurrentUser] = useState(undefined)
  const [posts, setPosts] = useState()
  const [rerenderPosts, setRerenderPosts] = useState(false)
  // const [comments, setComments] = useState()


  // const readAllComments = async () => {
  //   const comments = await getAllComments();
  //   setComments(comments)

  // }
  const handleLogin = async (loginData) => {
    const currentUser1 = await loginUser(loginData);
    setCurrentUser(currentUser1)
    return currentUser ? true : false;
  }

  const handlePostSubmit = async (postData) => {
    await postPost(postData)
    setRerenderPosts(true)
  }
  const handlePostUpdate = async (id, postData) =>
    await putPost(id, postData);

  const handlePostDelete = async (id) =>
    await destroyPost(id);


  useEffect(() => {
    setRerenderPosts(false)
  }, [rerenderPosts])



  useEffect(() => {
    const setUser = async () => await verifyUser().then((v) => setCurrentUser(v))
    setUser()
    console.log(currentUser)
  }, [])



  const renderedHTML = () => {
    return currentUser ?
      <>
        <Route exact path="/login" >
          {currentUser ?
            <Redirect to="/" />
            :
            <LoginPage {...props} handleLogin={props.handleLogin} />}
        </Route>

        <Route exact path="/" render={(props) => (
          <HomePage
            {...props}
            handlePostDelete={handlePostDelete}
            postList={posts}
            rerenderPosts={rerenderPosts}
          />
        )} />


        <Route exact path="/profile" render={(props) => (
          <ProfilePage
            {...props}
            currentUser={currentUser}
          />
        )} />

        <Route exact path='/profile/change_avatar' render={() =>
          <ChangeAvatar currentUser={currentUser} />}
        />

        <Route exact path="/posts/new" render={(props) => (
          <CreatePost
            {...props}
            currentUser={currentUser}
            handlePostSubmit={handlePostSubmit}
          />
        )} />

        <Route exact path="/posts/:id" render={(props) => {
          const { id } = props.match.params
          return <PostInfoPage
            {...props}
            handlePostDelete={handlePostDelete}
            postId={id}
            currentUser={currentUser}
          />
        }
        } />

        <Route exact path='/posts/:id/edit' render={(props) => {
          const { id } = props.match.params
          return <PostEditPage
            {...props}
            handlePostUpdate={handlePostUpdate}
            postId={id}
          />
        }} />
      </>
      :
      <>
        <Redirect to='/login' />
        <Route exact path='/login' render={(props) => (
          <LoginPage
            {...props}
            handleLogin={handleLogin}
          />
        )} />
        <Route exact path='/register' render={(props) => (
          <Register
            {...props}
            handleRegister={props.handleRegister}
          />
        )} />

      </>
  }
  return (
    <main>
      {renderedHTML()}
    </main>
  )
}


export default Container