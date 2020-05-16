import React from 'react'
import { Link } from 'react-router-dom';
import './PostFeed.css'

export default function PostFeed(props) {
  return (
    <div className='postfeed-section'>
      <h3 className='latest-posts-title'>Latest Posts</h3>
      <Link to="/posts/new"><button>Create a post</button></Link>
      {props.postList.map(post => (
        <React.Fragment key={post.id}>
          <div className='postfeed-card'>

            <div className='postfeed-card-title'>
              <Link
                className='postfeed-card-title-link'
                to={`/posts/${post.id}`}>
                {post.title}
              </Link>
            </div>
            <div>
              <img classname='postfeed-card-image' src={post.image_url} />
            </div>
            <div className='postfeed-card-description'>{post.description}</div>
            <p>{post.id}</p>
            {/* <button onClick={() => {
            props.history.push(`/posts/${post.id}/edit`);
          }}>Edit</button> */}
            {/* <button onClick={() => {
              props.handlePostDelete(post.id);
            }}>Delete</button> */}
            {/* <img src={post.image_url} /> */}
            <br />
          </div>
        </React.Fragment>
      ))}

    </div>
  )
}
