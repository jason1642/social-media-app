import React, { Component } from 'react'
import { getOnePost, addComment, getAllComments, verifyUser, getOneUser } from '../../Services/api-helper'
import './PostInfoPage.css'


class PostInfoPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      post: null,
      comments: null,
      commentText: '',
      currentUserId: null,
      postedBy: ''
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
    // const postCreatedBy = await getOneUser(this.state.post.user_id)
    this.state.post && console.log(getOneUser(this.state.post))
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
    console.log(this.state.currentUser)
    console.log(this.state.post)
    const { post, commentText, currentUserId } = this.state;
    return (

      <div className='postinfo-page-container'>

        {
          post &&
          <>
            <div className='postinfo-main-content'>
              <div className='post-info-main-title'>{post.title}</div>
              <div className='posted-by-title'>

              </div>
              <div className='post-info-image-container'><img className='post-info-image' src={post.image_url} alt="awrimaw" />
              </div>
              <div className='post-info-main-description'>
                {post.description}
              </div>



              {
                currentUserId == post.user_id ?
                  <>
                    <button onClick={() => {
                      this.props.history.push(`/posts/${post.id}/edit`);
                    }}>Edit</button>
                    <button onClick={() => {
                      this.props.handlePostDelete(post.id);
                      this.props.history.push(`/`);
                    }}>Delete</button>
                  </>
                  :
                  <> </>
              }


            </div>

            <div className='comment-container'>
              <h1 className='add-comment-title'>Comments</h1>
              <form className='comment-input-box' onSubmit={this.handleSubmit}>
                <input
                  type='text'
                  value={commentText}
                  name='commentText'
                  onChange={this.handleChange}
                  placeholder='Add your comment here!'
                />
                <button className='submit-button comment-submit-button'>Add comment</button>
              </form>
              <div className="comment-section">


                {this.state.comments &&
                  this.state.comments.map(comment => (
                    <React.Fragment key={comment.id}>
                      <div className='comment-single-box'>
                        <h3>{comment.post.user.username} says:</h3>
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