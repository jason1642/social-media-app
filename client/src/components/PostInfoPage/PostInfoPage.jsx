import React, { Component } from 'react'
import { getOnePost } from '../../Services/api-helper'
import './PostInfoPage.css'

class PostInfoPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      post: null
    }
  }

  componentDidMount() {
    this.setPost();
  }

  setPost = async () => {
    const post = await getOnePost(this.props.postId);
    this.setState({ post })
  }

  render() {
    const { post } = this.state;
    return (
      <div>
        {
          post &&
          <>
            <h1>{post.title}</h1>
            <img className='post-info-image' src={post.image_url} />
            <p>{post.description}</p>
          </>
        }
        <button onClick={() => {
          this.props.history.push(`/posts/${post.id}/edit`);
        }}>Edit</button>
        <div className='comments'>
          <h1>Comment here</h1>
        </div>

      </div>
    )
  }
}

export default PostInfoPage