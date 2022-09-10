import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { getpost, deletepost, getSingalPost } from "../features/Blog/BlogSlice";

const UserPost = () => {
  const { blog, isLoading } = useSelector((state) => state.blog);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //update handler
  const updateHandler = (id) => {
    navigate("/update-post");
    dispatch(getSingalPost(id));
  };

  //delete post
  const delete_post = (id) => {
    dispatch(deletepost(id));
    navigate("/");
  };
  useEffect(() => {
    dispatch(getpost());
  }, []);
  if (isLoading) {
    return (
      <div className="mt-[6rem] flex flex-col-reverse items-center ">
        <h1>loading</h1>
      </div>
    );
  }
  if (blog.length === 0) {
    return (
      <div className="mt-[6rem] flex flex-col items-center ">
        <h1>No post....</h1>
        <h1>
          Create your first post:
          <Link
            to="/create-post"
            className="bg-blue-300 rounded-sm px-3 py-2 m-2"
          >
            create
          </Link>
        </h1>
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
            onClick={() => updateHandler(post._id)}
          >
            update
          </button>
          <button onClick={() => delete_post(post._id)}>delete </button>
        </div>
      ))}
    </div>
  );
};

export default UserPost;
