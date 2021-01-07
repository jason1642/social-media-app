import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { verifyUser } from '../../Services/api-helper'
import './Header.css'
import logo from '../../resources/images/post-tree-logo-notext.png'
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null
    }
  }
  async componentDidMount() {
    const currentUser = await verifyUser();
    this.setState({ currentUser })

  }
  render() {

    return (<>
      {
        this.state.currentUser ?

          <header>
            <Link className="header-logo" to='/'>
              <img className="header-logo" src={logo} alt='site logo' />
            </Link>

            <Link className='site-title' to='/'>Post Tree!</Link>

            <h3 className='welcome-text'>Hello, {this.state.currentUser.username}</h3>

            <Link className='home-button' to="/">Home</Link>
            <Link className='header-create-post-button' to="/posts/new">Create a post</Link>
            <button className='logout-button' onClick={this.props.handleLogout}>Logout</button>




          </header>

          :
          // <header className='login-header'>
          //   <h1 className='login-page-header-title'>Post Tree!</h1>

          //   <Link className='register-button' to='/register'>Register Here</Link>
          //   <Link className='register-button' to='/login'>Login</Link>
          // </header>
          <></>

      }

    </>
    )
  }
}


export default Header