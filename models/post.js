const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const moment = require("moment");

const postSchema = new Schema({
  username: { type: String, required: true },
  nickname: { type: String, required: true },
  postText: { type: String, required: true },
  datePosted: { type: String, required: true, default: moment().format('MM-DD-YYYY hh:mm a') }
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;