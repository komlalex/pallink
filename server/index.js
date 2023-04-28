const express = require("express");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config()

//Importing routes
const userRouter = require("./routes/user-routes");
const postRouter = require("./routes/post-routes");
const commentRouter = require("./routes/comment-routes");


app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use("/users", userRouter);  
app.use("/posts", postRouter);
app.use("/comments", commentRouter);


mongoose.connect(process.env.MONGO_URL).
then(app.listen(1776, () => console.log("Server running on port 1776"))).
catch((err) => console.log(err));