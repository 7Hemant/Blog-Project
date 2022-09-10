const asynchandler = require("express-async-handler");
const { validationResult } = require("express-validator");
const BlogPost = require("../modules/BlogPost");

exports.createBlogPost = asynchandler(async (req, res) => {
  const checkError = validationResult(req);
  const { author, description, title } = req.body;

  if (!checkError.isEmpty()) {
    res.status(401);
    throw new Error("fill all the fields porperly");
  } else {
    const createdPost = await BlogPost.create({
      author,
      description,
      title,
      user: req.user._id,
    });

    res.json({
      status: "success",
      post: createdPost,
    });
  }
});
exports.getAllBlogPost = asynchandler(async (req, res) => {
  const Blogposts = await BlogPost.find();
  console.log(Blogposts);
  res.status(200).json({
    status: "success",
    Blogposts,
  });
});
//getUserBlogPost
exports.getUserBlogPost = asynchandler(async (req, res) => {
  const post = await BlogPost.find({ user: req.user.id });

  res.status(200).json(post);
});
//updateUserBlogPost
exports.updateUserBlogPost = asynchandler(async (req, res) => {
  const { author, description, title } = req.body;

  const post = await BlogPost.findById(req.params.id);

  //if post is not found
  if (!post) {
    res.status(400);
    throw new Error("post not found");
  }

  //check for user
  if (!req.user) {
    res.status(401);
    throw new Error("User not found");
  }

  // Make sure the logged in user matches the goal user
  if (post.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }

  const updatepost = await BlogPost.findByIdAndUpdate(
    req.params.id,
    {
      author,
      description,

      title,
    },
    { new: true }
  );

  res.json({
    status: "success",
    post: updatepost,
  });
});

//deleteUserBlogPost
exports.deleteUserBlogPost = asynchandler(async (req, res) => {
  const id = req.params.id;

  const post = await BlogPost.findById(id);
  if (!post) {
    res.status(400);
    throw new Error("post not found");
  }
  // Check for user
  if (!req.user) {
    res.status(401);
    throw new Error("User not found");
  }
  // Make sure the logged in user matches the goal user
  if (post.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }
  await post.remove();
  res.json({ id: post._id });
});
