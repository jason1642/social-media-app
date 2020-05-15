import React, { Component } from 'react'
import { getOnePost, addComment, getAllComments } from '../../Services/api-helper'
import './PostInfoPage.css'

class PostInfoPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      post: null,
      comments: null,
      commentText: ''
    }
  }

  componentDidMount() {
    this.setPost();
    this.setComments();
  }

  setPost = async () => {
    const post = await getOnePost(this.props.postId);
    this.setState({ post })
  }

  setComments = async () => {
    const comments = await getAllComments(1)
    this.setState({ comments })
  }

  handleChange = (e) => {
    const { value } = e.target;
    console.log(this.state.commentText)
    this.setState({
      commentText: value
    })
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const post = await addComment(this.state.commentText, 1, this.state.post.id);
    this.setState({ post });
    console.log('this is ' + this.state.post)

  }

  render() {
    const { post, commentText } = this.state;
    console.log('this is comments ' + this.state.comments
    )
    return (

      <div>
        {
          post &&
          <>
            <h1>{post.title}</h1>
            <img className='post-info-image' src={post.image_url} alt="awrimaw" />
            <p>{post.description}</p>
          </>
        }
        <button onClick={() => {
          this.props.history.push(`/posts/${post.id}/edit`);
        }}>Edit</button>
        <div className='comments'>
          <h1>Add comment</h1>
          <form onSubmit={this.handleSubmit}>
            <input
              type='text'
              value={commentText}
              name='commentText'
              onChange={this.handleChange}
            />
            <button>Add comment</button>
          </form>
          <div>
            {
              this.state.comments &&
              <p>Comments here!!!</p>
            }
          </div>
        </div>


      </div>
    )
  }
}

export default PostInfoPage