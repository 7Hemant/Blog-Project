import React, { useState } from "react";
import { createpost } from "../../features/Blog/BlogSlice";
import { useDispatch } from "react-redux";
const Edit = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [author, setAuthor] = useState(" ");
  const dispatch = useDispatch();
  const Formhandler = (event) => {
    event.preventDefault(); // not working
    const data = {
      title,
      description,
      author,
    };
    console.log(title, description, author);
    dispatch(createpost(data));
    setTitle(" ");
    setDescription(" ");
    setAuthor(" ");
  };

  return (
    <form onSubmit={Formhandler}>
      <div className="from-gorup">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="from-gorup">
        <label htmlFor="description">Description</label>
        <input
          type="text"
          id="description"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
      </div>
      <div className="from-gorup">
        <label htmlFor="author">Author</label>
        <input
          type="text"
          id="author"
          value={author}
          onChange={(e) => {
            setAuthor(e.target.value);
          }}
        />
      </div>
      <div className="from-gorup">
        <button type="submit">create post</button>
      </div>
    </form>
  );
};

export default Edit;
