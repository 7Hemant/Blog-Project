const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "user",
    },
    title: { type: String, required: true },
    description: { type: String, required: true },
    // image: {
    //   data: Buffer,
    //   contentType: String,
    // },
    author: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Blog", blogSchema);
