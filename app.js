const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const mongoose = require("mongoose");
require("dotenv").config();

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const quoteRouter = require("./routes/qoutes");
const productRouter = require("./routes/product");
const studentRouter = require("./routes/student");

mongoose.connect(
  process.env.DB_URL_STRING,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  },
  (err) => {
    if (err) {
      console.log("The connection have", err);
    } else {
      console.log("!!!!connected Mongodb remote server successfully!!!!");
    }
  }
);

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/quote", quoteRouter);
app.use("/product", productRouter);
app.use("/student", studentRouter);

module.exports = app;
