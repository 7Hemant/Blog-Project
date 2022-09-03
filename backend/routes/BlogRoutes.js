const express = require("express");
const {
  createBlogPost,
  getAllBlogPost,
  getUserBlogPost,
  updateUserBlogPost,
  deleteUserBlogPost,
} = require("../controllers/blogPostController");
const BlogRoute = express.Router();

//create post
BlogRoute.post("/create", createBlogPost);
//get all post
BlogRoute.get("/allpost", getAllBlogPost);
//get post for only particular user
BlogRoute.get("/userpost", getUserBlogPost);
//update post
BlogRoute.post("/update/:id", updateUserBlogPost);
//delete post
BlogRoute.post("/delete/:id", deleteUserBlogPost);
module.exports = BlogRoute;
