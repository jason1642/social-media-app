import React, { Component } from 'react'
import './CreatePost.css'


class CreatePost extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      description: '',
      user_id: props.currentUser.id
    }
  }


  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })

  }

  render() {
    const { title, description } = this.state;

    return (
      <form className='create-post-form' onSubmit={(e) => {
        e.preventDefault();
        console.log(this.state)
        this.props.handlePostSubmit(this.state);
        this.props.history.push('/');
      }}>
        <h3>Create a Post</h3>
        <input
          id="title"
          type="text"
          name="title"
          minLength='10'
          maxLength='150'
          value={title}
          onChange={this.handleChange}
          placeholder="Title"
        />
        <textarea
          id="description"
          type="text"
          name="description"
          maxLength='300'
          value={description}
          placeholder="Description"
          onChange={this.handleChange}
        />

        <button className='createpost-submit-button'>Submit</button>

      </form>
    )
  }
}

export default CreatePost