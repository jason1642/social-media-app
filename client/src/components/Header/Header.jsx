import React from 'react';
import { Link } from 'react-router-dom';

export default function Header(props) {
  return (
    <header>
      <h1>Social media app</h1>
      {
        props.currentUser
          ?
          <>
            <p>Hello, {props.currentUser.username}</p>
            <button onClick={props.handleLogout}>Logout</button>
          </>
          :
          <Link to="/login">Login/Register</Link>
      }
      <hr />
      {
        props.currentUser
        &&
        <>
          <Link to="/posts">posts</Link>
          <Link to="/flavors">Flavors</Link>
          <hr />
        </>
      }

    </header>
  )
}
