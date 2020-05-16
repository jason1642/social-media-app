import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { verifyUser } from '../../Services/api-helper'
import './Header.css'
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
      headerHTML: <header></header>
    }
  }
  async componentDidMount() {
    const currentUser = await verifyUser();
    this.setState({ currentUser })

  }
  com
  render() {

    return (<>
      {
        this.props.currentUser ?

          <header>

            <img className="header-logo" src='https://www.pngitem.com/pimgs/m/543-5439153_transparent-javascript-icon-png-reddit-logo-hd-png.png' alt='site logo' />

            <Link className='site-title' to='/'><h1>Social media app</h1></Link>

            <h3 className='welcome-text'>Hello, {this.props.currentUser.username}</h3>

            <Link className='home-button' to="/">home</Link>

            <button className='logout-button' onClick={this.props.handleLogout}>Logout</button>




          </header>

          :
          <header></header>

      }

    </>
    )
  }
}


export default Header