import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import LoginPage from '../LoginPage/LoginPage';
import Register from '../Register/Register';
import { getAllFlavors, getAllFoods, postFood, putFood, destroyFood } from '../../Services/api-helper';
// import ShowFlavors from './ShowFlavors';
// import ShowFoods from './ShowFoods';
// import CreateFood from './CreateFood';
// import UpdateFood from './UpdateFood';
// import FoodItem from './FoodItem';

export default class Container extends Component {
  state = {
    flavors: [],
    foods: []
  }

  componentDidMount() {
    this.readAllFlavors();
    this.readAllFoods();
  }

  readAllFlavors = async () => {
    const flavors = await getAllFlavors();
    this.setState({ flavors })
  }

  readAllFoods = async () => {
    const foods = await getAllFoods();
    this.setState({ foods })
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