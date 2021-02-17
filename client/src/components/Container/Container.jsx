import React, { Component, useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import PostInfoPage from '../PostInfoPage/PostInfoPage.jsx'
import LoginPage from '../LoginPage/LoginPage';
import Register from '../Register/Register';
import { getAllComments, getAllPosts, postPost, putPost, destroyPost, verifyUser } from '../../Services/api-helper';
import PostEditPage from '../PostEditPage/PostEditPage.jsx';
import ProfilePage from '../ProfilePage/ProfilePage.jsx'
import HomePage from '../HomePage/HomePage.jsx'
import CreatePost from '../CreatePost/CreatePost.jsx'
import ChangeAvatar from '../ProfilePage/ChangeAvatar/ChangeAvatar'

export default class Container extends Component {
  constructor(props) {
    super(props)
    this.state = {
      comments: [],
      posts: []
    }
  }

  async componentDidMount() {
    // this.readAllComments();
    this.readAllPosts();
    const currUser = await verifyUser()
    this.setState({
      userExists: currUser
    })
  }

  readAllComments = async () => {
    const comments = await getAllComments();
    this.setState({ comments })
  }

  readAllPosts = async () => {
    const posts = await getAllPosts();
    this.setState({ posts })

  }

  handlePostSubmit = async (postData) => {
    const newPost = await postPost(postData);
    this.setState(prevState => ({
      posts: [...prevState.posts, newPost]
    }))
  }

  handlePostUpdate = async (id, postData) => {
    const updatedPost = await putPost(id, postData);
    this.setState(prevState => ({
      posts: prevState.posts.map(post => {
        return post.id === id ? updatedPost : post
      })
    }))
  }

  handlePostDelete = async (id) => {
    await destroyPost(id);
    this.setState(prevState => ({
      posts: prevState.posts.filter(post => {
        return post.id !== id
      })
    }))
  }
  render() {
    return (
      <main>
        {
          this.state.userExists ?
            <>

              <Route exact path="/login">
                {this.state.userExists ? <Redirect to="/" /> : < LoginPage />}
              </Route>

              <Route exact path="/" render={(props) => (
                <HomePage
                  {...props}
                  handlePostDelete={this.handlePostDelete}
                  postList={this.state.posts}
                />
              )} />


              <Route exact path="/profile" render={(props) => (
                <ProfilePage
                  {...props}
                  currentUser={this.state.userExists}
                />
              )} />

              <Route exact path='/profile/change_avatar' render={() =>
                <ChangeAvatar />}
              />


              <Route exact path="/posts/new" render={(props) => (
                <CreatePost
                  {...props}
                  currentUser={this.props.currentUser}
                  handlePostSubmit={this.handlePostSubmit}
                />
              )} />

              <Route exact path="/posts/:id" render={(props) => {
                const { id } = props.match.params
                return <PostInfoPage
                  {...props}
                  handlePostDelete={this.handlePostDelete}
                  postId={id}
                  currentUser={this.props.currentUser}
                />
              }
              } />

              <Route exact path='/posts/:id/edit' render={(props) => {
                const { id } = props.match.params
                return <PostEditPage
                  {...props}
                  handlePostUpdate={this.handlePostUpdate}
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
                  handleLogin={this.props.handleLogin}
                />
              )} />
              <Route exact path='/register' render={(props) => (
                <Register
                  {...props}
                  handleRegister={this.props.handleRegister}
                />
              )} />

            </>
        }
      </main>
    )
  }
}