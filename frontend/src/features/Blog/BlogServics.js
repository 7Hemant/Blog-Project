import axios from "axios";
const API_URL = "http://localhost:8080/api/v1/blog/";

//create post
const createPost = async (postdata, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const resdata = await axios.post(API_URL + "create", postdata, config);

    console.log(resdata);
    return resdata;
  } catch (error) {
    console.log("error");
  }
};

//get only user post
const getPost = async (token) => {
  const config = {
    Headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const resdata = await axios.get(API_URL + "userpost", config);
  } catch (error) {
    console.log("error");
  }
};

//update only user post
const updatePost = async (postid, postdata, token) => {
  const config = {
    Headers: {
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
    Headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const resdata = await axios.get(API_URL + `delete/${postid}`, config);
    return resdata;
  } catch (error) {
    console.log("error");
  }
};

const BlogService = {
  createPost,
  getPost,
  updatePost,
  deletePost,
};

export default BlogService;
