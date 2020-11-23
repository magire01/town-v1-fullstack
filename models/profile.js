const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const profileSchema = new Schema({
  username: { type: String, required: true },
  nickname: { type: String, required: true },
  age: { type: Number, required: true },
  location: { type: String, required: true },
  something: { type: String, required: true },
  town: { type: String, required: false }
});

const Profile = mongoose.model("Profile", profileSchema);

module.exports = Profile;