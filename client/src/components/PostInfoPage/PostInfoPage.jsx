import React, { Component } from 'react'
import { getOnePost, addComment, getAllComments, verifyUser } from '../../Services/api-helper'
import './PostInfoPage.css'


class PostInfoPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      post: null,
      comments: null,
      commentText: '',
      currentUserId: null
    }
  }

  async componentDidMount() {
    const currentUser1 = await verifyUser();
    this.setState({
      currentUserId: currentUser1.id
    })
    this.setPost()
    if (this.setPost()) {
      this.setComments();
    }
  }

  setPost = async () => {
    const post = await getOnePost(this.props.postId);
    this.setState({ post })
  }

  setComments = async () => {

    const comments = await getAllComments(this.props.postId)
    this.setState({ comments })
    console.log(this.state.comments)
  }

  handleChange = (e) => {
    const { value } = e.target;
    this.setState({
      commentText: value
    })
  }

  handleSubmit = async () => {
    const newComment = await addComment({
      comment_text: this.state.commentText,
      user_id: this.state.currentUserId,
      post_id: this.props.postId
    }, this.props.postId);

    this.setState(prevState => ({
      comments: [...prevState.comments, newComment]
    }))
  }

  render() {
    console.log(this.state.comments)
    const { post, commentText } = this.state;
    return (

      <div>

        {
          post &&
          <>
            <>
              <h1>{post.title}</h1>
              <img className='post-info-image' src={post.image_url} alt="awrimaw" />
              <p>{post.description}</p>
            </>

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
              <div className="comment-section">


                {this.state.comments &&
                  this.state.comments.map(comment => (
                    <React.Fragment key={comment.id}>
                      <div className='comment-single-box'>
                        <h3>{comment.post.user.username}:</h3>
                        <p>{comment.comment_text}</p>

                        <br />
                      </div>
                    </React.Fragment>
                  ))}
              </div>
            </div>
          </>
        }
      </div>
    )
  }
}

export default PostInfoPage