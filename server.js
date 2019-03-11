const express = require("express");
const mongoose = require("mongoose");
const bodyParse = require("body-parser");
const path = require("path");

const item = require("./routes/api/item");

const app = express();

// BodyParser Middleware
app.use(bodyParse.json());

// DB config
const db = require("./config/key").mongoURI;

// Connect to mongo
mongoose
  .connect(db)
  .then(() => console.log(`MongoDB connected`))
  .catch(err => console.log(err));

// Use Routes
app.use("/api/items", item);

// Server static assets in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`start with ${port}`));
