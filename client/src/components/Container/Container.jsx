import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import PostInfoPage from '../PostInfoPage/PostInfoPage.jsx'
import LoginPage from '../LoginPage/LoginPage';
import Register from '../Register/Register';
import { getAllComments, getAllPosts, postPost, putPost, destroyPost } from '../../Services/api-helper';
import PostEditPage from '../PostEditPage/PostEditPage.jsx';
// import ShowFlavors from './ShowFlavors';
// import ShowFoods from './ShowFoods';
// import CreateFood from './CreateFood';
// import FoodItem from './FoodItem';
import PostFeed from '../PostFeed/PostFeed.jsx'
import CreatePost from '../CreatePost/CreatePost.jsx'
export default class Container extends Component {
  constructor(props) {
    super(props)
    this.state = {
      comments: [],
      posts: []
    }
  }

  componentDidMount() {
    // this.readAllComments();
    this.readAllPosts();
    console.log(this.state.posts)
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
    // const postObject = postData
    // postObject.user_id = this.props.currentUser.id
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

        <Route exact path='/login' render={(props) => (
          <LoginPage
            {...props}
            handleLogin={this.props.handleLogin}
          />
        )} />

        <Route exact path="/" render={(props) => (
          <PostFeed
            {...props}
            handlePostDelete={this.handlePostDelete}
            postList={this.state.posts}
          />
        )} />

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

        <Route exact path='/register' render={(props) => (
          <Register
            {...props}
            handleRegister={this.props.handleRegister}
          />
        )} />

      </main>
    )
  }
}