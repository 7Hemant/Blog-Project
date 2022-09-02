const mongoose = require("mongoose");

const blogSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    author: { type: String, required: true },
  },
  { timestamp: true }
);

module.exports = mongoose.model("Blog", blogSchema);
