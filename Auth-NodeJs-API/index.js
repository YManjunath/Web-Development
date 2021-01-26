const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");

// import Routes
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");

dotenv.config();

// connect to DB
mongoose.connect(process.env.CONNECTION_URL, { useUnifiedTopology: true }, () =>
  console.log("connected to DB!")
);

// middleWare
app.use(express.json());

//Route middleware
app.use("/api/user", authRoute); // api/user/register
app.use("/api/posts", postRoute);

app.listen(3000, function () {
  console.log("server is up and running on port 3000");
});
