const express = require("express");
const {
  createBlogPost,
  getAllBlogPost,
  getUserBlogPost,
  updateUserBlogPost,
  deleteUserBlogPost,
} = require("../controllers/blogPostController");
const { protect } = require("../middleware/ProtectRoute");
const BlogRoute = express.Router();

//create post
BlogRoute.post("/create", [protect], createBlogPost);
//get all post
BlogRoute.get("/allpost", getAllBlogPost);
//get post for only particular user
BlogRoute.get("/userpost", [protect], getUserBlogPost);
//update post
BlogRoute.patch("/update/:id", [protect], updateUserBlogPost);
//delete post
BlogRoute.delete("/delete/:id", [protect], deleteUserBlogPost);
module.exports = BlogRoute;
