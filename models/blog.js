const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  title: String,
  author: String,
  url: String,
  likes: Number,
  tags: [],
  content: String,
  date: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  comments: [
    {
      text: String,
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    },
  ],
});

// blogSchema.set("toJSON", {
//   transform: (doc, ret) => {
//     ret.id = ret._id.toString();
//     delete ret._id;
//     delete ret.__v;
//   },
// });

module.exports = mongoose.model("Blog", blogSchema);