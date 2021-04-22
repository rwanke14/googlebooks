const express = require("express");

const mongoose = require("mongoose");
//const routes = require("./routes/html-routes");
const library = require("./routes/library")
const router = require("express").Router();
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(cors())
// Add routes, both API and view
// app.use(routes);
app.use(library)

router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
  });

// Connect to the Mongo DB
//mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist");

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/reactreadinglist',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});