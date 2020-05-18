import React, { Component } from 'react'
import { getOnePost } from '../../Services/api-helper';
import './PostEditPage.css'

export default class UpdateFood extends Component {
  state = {
    title: '',
    description: '',
    image_url: ''
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })

  }

  componentDidMount() {
    this.setFormData();
  }

  setFormData = async () => {
    const postItem = await getOnePost(this.props.postId);
    this.setState({
      title: postItem.title,
      description: postItem.description,
      image_url: postItem.image_url,
    })
  }

  render() {
    const { title, description, image_url } = this.state
    return (
      <form className='post-edit-page-form' onSubmit={(e) => {
        e.preventDefault();
        this.props.handlePostUpdate(this.props.postId, this.state);
        this.props.history.push(`/posts/${this.props.postId}`);
      }}>
        <h1>Edit Post</h1>
        <h3 className='post-edit-page-form-label'>Title</h3>
        <input
          type="text"
          value={title}
          name="title"
          onChange={this.handleChange}
          placeholder='Title'
        />
        <h3 className='post-edit-page-form-label'>Description</h3>

        <textarea
          type="text"
          value={description}
          name="description"
          onChange={this.handleChange}
          placeholder='Description'
        />
        <h3 className='post-edit-page-form-label'>Image Url</h3>

        <input
          type="text"
          value={image_url}
          name="image_url"
          onChange={this.handleChange}
          placeholder='image URL'
        />
        <button className='login-submit-button'>Submit</button>

      </form>
    )
  }
}
