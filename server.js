const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const bcrypt = require("bcrypt");
require('dotenv').config();
var cors = require('cors');
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);


app.use(cors({ origin : [ "http://localhost:3001/"]}));

// Connect to the Mongo DB
mongoose.connect(`mongodb+srv://mg:${process.env.DB_PW}@town-mg.gqyn8.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`|| "mongodb://127.0.0.1/townapp",
  { useNewUrlParser: true, useFindAndModify: false },
  () => console.log('connected to db')
);

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
