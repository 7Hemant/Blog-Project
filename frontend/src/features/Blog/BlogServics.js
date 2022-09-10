import axios from "axios";
const API_URL = "http://localhost:8080/api/v1/blog/";

//create post
const createPost = async (postdata, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const resdata = await axios.post(API_URL + "create", postdata, config);

  return resdata;
};

//get only user post
const getPost = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const resdata = await axios.get(API_URL + "userpost", config);

  return resdata;
};

//get user singal post
const postID = async (id, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  console.log(id);
  const resdata = await axios.get(API_URL + `userpost/${id}`, config);

  return resdata;
};
//update only user post
const updatePost = async (postid, postdata, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const resdata = await axios.patch(
      API_URL + `update/${postid}`,
      postdata,
      config
    );
    return resdata;
  } catch (error) {
    console.log("error");
  }
};

//delete user Post only
const deletePost = async (postid, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  console.log(postid);
  const resdata = await axios.delete(API_URL + `delete/${postid}`, config);
  return resdata.data;
};

const BlogService = {
  createPost,
  getPost,
  postID,
  updatePost,
  deletePost,
};

export default BlogService;
