const express = require("express");
const { body } = require("express-validator");
const {
  createBlogPost,
  getAllBlogPost,
  getUserBlogPost,
  updateUserBlogPost,
  deleteUserBlogPost,
  singlePost,
} = require("../controllers/blogPostController");
const { protect } = require("../middleware/ProtectRoute");
const BlogRoute = express.Router();

//create post
BlogRoute.post(
  "/create",
  [
    body("title").trim().isString().isLength({ min: 1 }),
    body("description").trim().isLength({ min: 1 }),
    body("author").trim().isLength({ min: 1 }),
    protect,
  ],
  createBlogPost
);
//get all post
BlogRoute.get("/allpost", getAllBlogPost);
//get post for only particular user
BlogRoute.get("/userpost", [protect], getUserBlogPost);
//update post
BlogRoute.patch(
  "/update/:id",
  [
    protect,
    body("title").trim().isLength({ min: 1 }),
    body("description").trim().isLength({ min: 1 }),
    body("author").trim().isLength({ min: 1 }),
  ],
  updateUserBlogPost
);
//delete post
BlogRoute.delete("/delete/:id", [protect], deleteUserBlogPost);
BlogRoute.delete("/userpost/:id", [protect], singlePost);
module.exports = BlogRoute;
