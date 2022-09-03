const asynchandler = require("express-async-handler");
const BlogPost = require("../modules/BlogPost");
exports.createBlogPost = asynchandler(async (req, res) => {
  const { author, description, image, title } = req.body;
  const createdPost = await BlogPost.create({
    author,
    description,
    image,
    title,
  });
  res.json({
    status: "success",
    post: createdPost,
  });
});
exports.getAllBlogPost = asynchandler(async (req, res) => {
  const Blogpost = await BlogPost.find();
  console.log("errer");
  res.status(200).json({
    status: "success",
    Blogpost,
  });
});
//getUserBlogPost
exports.getUserBlogPost = asynchandler(async (req, res) => {});
//updateUserBlogPost
exports.updateUserBlogPost = asynchandler(async (req, res) => {
  const { author, description, image, title } = req.body;
  const _id = req.params.id;
  const post = await BlogPost.findById(_id);
  if (!post) {
    res.status(400);
    throw new Error("post not found");
  }
  const updatepost = await BlogPost.findByIdAndUpdate(
    _id,
    {
      author,
      description,
      image,
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
  await post.remove();
  res.json({ id: post._id });
});
