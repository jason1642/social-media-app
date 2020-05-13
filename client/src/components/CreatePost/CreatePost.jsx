import React, { Component } from 'react'
import './CreatePost.css'
class CreatePost extends Component {
  constructor() {
    super()
    this.state = {
      title: '',
      description: '',
      image_url: ''
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  }

  render() {
    const { title, description, image_url } = this.state;

    return (
      <form onSubmit={(e) => {
        e.preventDefault();
        console.log(this.state)
        this.props.handlePostSubmit(this.state);
        this.props.history.push('/posts');
      }}>
        <h3>Create Post</h3>
        <input
          id="title"
          type="text"
          name="title"
          value={title}
          onChange={this.handleChange}
          placeholder="title"
        />
        <input
          id="description"
          type="text"
          name="description"
          value={description}
          placeholder="description"
          onChange={this.handleChange}
        />
        <input
          id="image_url"
          type="text"
          name="image_url"
          value={image_url}
          placeholder="image_url"
          onChange={this.handleChange}
        />
        <button>Submit</button>

      </form>
    )
  }
}

export default CreatePost