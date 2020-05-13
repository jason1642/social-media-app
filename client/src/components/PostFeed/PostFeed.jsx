import React from 'react'
import { Link } from 'react-router-dom';

export default function PostFeed(props) {
  return (
    <div>
      <h3>posts</h3>
      {props.postList.map(post => (
        <React.Fragment key={post.id}>
          <div className='post-card'>
            <Link to={`/posts/${post.id}`}>
              {post.title}
            </Link>
            <p>{post.description}</p>
            {/* <button onClick={() => {
            props.history.push(`/posts/${post.id}/edit`);
          }}>Edit</button> */}
            {/* <button onClick={() => {
            props.handleFoodDelete(food.id);
          }}>Delete</button> */}
            {/* <img src={post.image_url} /> */}
            <br />
          </div>
        </React.Fragment>
      ))}
      <Link to="/posts/new"><button>Create a post</button></Link>
    </div>
  )
}
