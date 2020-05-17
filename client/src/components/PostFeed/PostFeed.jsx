import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './PostFeed.css'

class PostFeed extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }




  render() {
    return (
      <>
        <h3 className='latest-posts-title'>Latest Posts</h3>

        <div className='postfeed-section'>
          {
            this.props.postList.map(post => {

              return (

                <React.Fragment key={post.id}>

                  <div
                    onClick={
                      e =>
                        this.props.history.push(`/posts/${post.id}`)

                    }
                    className='postfeed-card'>

                    <div className='postfeed-card-title'>
                      <Link
                        className='postfeed-card-title-link'
                        to={`/posts/${post.id}`}>
                        {post.title}
                      </Link>
                    </div>
                    <div className='postfeed-card-image-container'>
                      <img onError={"this.style.display='none'"} className='postfeed-card-image' src={post.image_url} />
                    </div>
                    <div className='postfeed-card-description'>{post.description}</div>
                    {/* <p>Posted by: {post.user.name}</p> */}

                    <br />
                  </div>
                </React.Fragment>

              )
            })
          }

        </div >
      </>
    )
  }
}

export default PostFeed