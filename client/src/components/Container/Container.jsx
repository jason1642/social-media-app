import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import LoginPage from '../LoginPage/LoginPage';
import Register from '../Register/Register';
import { getAllFlavors, getAllPosts, postFood, putFood, destroyFood } from '../../Services/api-helper';
// import ShowFlavors from './ShowFlavors';
// import ShowFoods from './ShowFoods';
// import CreateFood from './CreateFood';
// import UpdateFood from './UpdateFood';
// import FoodItem from './FoodItem';
import PostFeed from '../PostFeed/PostFeed.jsx'
import CreatePost from '../CreatePost/CreatePost.jsx'
export default class Container extends Component {
  state = {
    comments: [],
    posts: []
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

  handleFoodSubmit = async (foodData) => {
    const newFood = await postFood(foodData);
    this.setState(prevState => ({
      foods: [...prevState.foods, newFood]
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

  handleFoodDelete = async (id) => {
    await destroyFood(id);
    this.setState(prevState => ({
      foods: prevState.foods.filter(food => {
        return food.id !== id
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
            postList={this.state.posts}
          />
        )} />

        <Route path="/posts/new" render={(props) => (
          <CreatePost
            {...props}
            handleFoodSubmit={this.handleFoodSubmit}
          />
        )} />

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