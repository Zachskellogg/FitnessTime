const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect("mongodb://EMpDB:9jDrbFhNAeyJ4!b@ds119578.mlab.com:19578/heroku_j6krq6t0", {
  useNewUrlParser: true,
  useFindAndModify: false
});

// 9jDrbFhNAeyJ4!b
// routes
app.use(require("./routes/api.js"));
app.use(require("./routes/view.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});