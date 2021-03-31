import React, { useState } from "react";
import "./CreatePost.css";

const CreatePost = (props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [userId, setUserId] = useState(props.currentUser.id);

  const handleChange = (e) => {
    const { name, value } = e.target;

    name === "title" ? setTitle(value) : setDescription(value);
    console.log(title, description);
  };

  return (
    <form
      className="create-post-form"
      onSubmit={(e) => {
        e.preventDefault();
        props.handlePostSubmit({
          title,
          description,
          user_id: userId,
        });
        props.history.push("/");
      }}
    >
      <h3>Create a Post</h3>
      <input
        id="title"
        type="text"
        name="title"
        minLength="10"
        maxLength="150"
        value={title}
        onChange={handleChange}
        placeholder="Title"
      />
      <textarea
        id="description"
        type="text"
        name="description"
        maxLength="300"
        value={description}
        placeholder="Description"
        onChange={handleChange}
      />

      <button className="createpost-submit-button">Submit</button>
    </form>
  );
};

export default CreatePost;
