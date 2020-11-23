const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const moment = require("moment");

const townSchema = new Schema({
  name: { type: String, required: true },
  createdBy: { type: String, required: true },
  description: { type: String, required: true },
  members: [{
    username: { type: String, required: true },
    nickname: { type: String, required: true },
    age: { type: Number, required: true },
    location: { type: String, required: true },
    something: { type: String, required: true }
  }],
  dateCreated: { type: String, required: true, default: moment().format('MM-DD-YYYY hh:mm a') }
});

const Town = mongoose.model("Town", townSchema);

module.exports = Town;