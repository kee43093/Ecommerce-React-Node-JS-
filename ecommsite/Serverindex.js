require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const path = require("path");
const ObjectId = require('mongodb').ObjectId;
let uri = ""
const app = express();
// import User from './models/user.model';


// note with heroku deployment you must source port from env
const port = process.env.PORT || 5001;

// register middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  uri = process.env.ATLAS_URI;   // connection string for Atlas here  
} else {
  uri = process.env.ATLAS_URI;  // connection string for localhost mongo here  
}


// connection to database
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
}
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB connection is live");
})




app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });