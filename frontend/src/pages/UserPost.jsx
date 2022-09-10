import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getpost, deletepost } from "../features/Blog/BlogSlice";

const UserPost = () => {
  const { blog } = useSelector((state) => state.blog);
  const navigate = useNavigate();
  const [value, setValue] = useState();

  //get id
  const id = (postid) => {
    console.log(postid);
    setValue(postid);
  };
  //update handler
  const updateHandler = () => {
    // navigate("/update-post");
    console.log(value);
  };
  console.log(blog);
  //delete post
  const delete_post = () => {
    console.log("click");
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getpost());
  }, []);
  if (blog.length === 0) {
    return (
      <div className="mt-[6rem] flex flex-col-reverse items-center ">
        <h1>loading</h1>
      </div>
    );
  }
  return (
    <div className="mt-[6rem] flex flex-col-reverse items-center ">
      {blog.map((post, index) => (
        <div className="border rounded w-3/4   p-4 m-4 shadow" key={index}>
          <h1>{post.title}</h1>
          <p>{post.description}</p>
          <h1>{post.author}</h1>
          <button
            className="bg-blue-300 px-3 py-1 rounded "
            onClick={updateHandler}
          >
            update
          </button>
          <button onClick={delete_post}>delete </button>
        </div>
      ))}
    </div>
  );
};

export default UserPost;
