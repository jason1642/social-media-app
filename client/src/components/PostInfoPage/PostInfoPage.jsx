import React, { Component } from 'react'
import { getOnePost } from '../../Services/api-helper'
import { Link } from 'react-router-dom'
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
            <img class='post-info-image' src={post.image_url} />
            <p>{post.description}</p>
          </>
        }
        <Link to='posts/:id/edit'>edit post</Link>
      </div>
    )
  }
}

export default PostInfoPage