import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import PostInfoPage from '../PostInfoPage/PostInfoPage.jsx'
import LoginPage from '../LoginPage/LoginPage';
import Register from '../Register/Register';
import { getAllFlavors, getAllPosts, postPost, putFood, destroyPost } from '../../Services/api-helper';
// import ShowFlavors from './ShowFlavors';
// import ShowFoods from './ShowFoods';
// import CreateFood from './CreateFood';
// import UpdateFood from './UpdateFood';
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

  readAllFlavors = async () => {
    const flavors = await getAllFlavors();
    this.setState({ flavors })
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

  handleFoodUpdate = async (id, foodData) => {
    const updatedFood = await putFood(id, foodData);
    this.setState(prevState => ({
      foods: prevState.foods.map(food => {
        return food.id === id ? updatedFood : food
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
        <Route path='/login' render={(props) => (
          <LoginPage
            {...props}
            handleLogin={this.props.handleLogin}
          />

        )} />
        <Route exact path="/posts" render={(props) => (
          <PostFeed
            {...props}
            handlePostDelete={this.handlePostDelete}
            postList={this.state.posts}
          />
        )} />

        <Route path="/posts/new" render={(props) => (
          <CreatePost
            {...props}
            currentUser={this.props.currentUser}
            handlePostSubmit={this.handlePostSubmit}
          />
        )} />

        <Route exact path='/posts/:id' render={(props) => {
          const { id } = props.match.params
          return <PostInfoPage
            postId={id}
          // flavors={this.state.flavors}
          />
        }
        } />

        <Route path='/posts/:id/edit' render={(props) => {
          const { id } = props.match.params
          return <UpdatePost
            {...props}
            handlePostUpdate={this.handlePostUpdate}
            postId={id}
          />
        }} />

        <Route path='/register' render={(props) => (
          <Register
            {...props}
            handleRegister={this.props.handleRegister}
          />
        )} />
      </main>
    )
  }
}