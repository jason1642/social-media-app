import React, { Component } from 'react'
import { getOnePost } from '../../Services/api-helper';

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
      <form onSubmit={(e) => {
        e.preventDefault();
        this.props.handlePostUpdate(this.props.postId, this.state);
        this.props.history.push(`/posts/${this.props.postId}`);
      }}>
        <h3>Edit Post</h3>
        <input
          type="text"
          value={title}
          name="title"
          onChange={this.handleChange}
        />
        <input
          type="text"
          value={description}
          name="description"
          onChange={this.handleChange}
        />
        <input
          type="text"
          value={image_url}
          name="image_url"
          onChange={this.handleChange}
        />
        <button>Submit</button>

      </form>
    )
  }
}
