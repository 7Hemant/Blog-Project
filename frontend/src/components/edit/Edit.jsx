import React, { useState } from "react";
import { createpost } from "../../features/Blog/BlogSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
const Edit = (props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [author, setAuthor] = useState(" ");
  const navigate = useNavigate();
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
    navigate("/user");
    setTitle(" ");
    setDescription(" ");
    setAuthor(" ");
  };

  return (
    <form
      onSubmit={Formhandler}
      className="border flex flex-col justify-center items-center border-red-200 w-11/12 sm:w-6/12 shadow rounded-md"
    >
      <div className="from-gorup flex items-center flex-col m-2 w-9/12">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border rounded w-full pl-3 focus:outline-none "
        />
      </div>
      <div className="from-gorup flex items-center flex-col m-2 w-9/12">
        <label htmlFor="description">Description</label>
        <textarea
          type="text-area"
          id="description"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          rows="5"
          cols="33"
          className="border rounded w-full pl-3 focus:outline-none "
        />
      </div>
      <div className="from-gorup flex items-center flex-col m-2 w-9/12">
        <label htmlFor="author">Author</label>
        <input
          type="text"
          id="author"
          value={author}
          onChange={(e) => {
            setAuthor(e.target.value);
          }}
          className="border rounded w-full pl-3 focus:outline-none "
        />
      </div>
      <div className="from-gorup">
        <button type="submit" className="bg-blue-300 rounded-sm px-3 py-2 m-2">
          {props.update ? "Update" : "Create"}
        </button>
      </div>
    </form>
  );
};

export default Edit;
