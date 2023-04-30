const express = require("express");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config()

//Importing routes
const userRouter = require("./routes/user-routes");  
const postRouter = require("./routes/post-routes");
const commentRouter = require("./routes/comment-routes");
const dmessageRouter = require("./routes/dmessage-route");
const gmessageRouter = require("./routes/gmessage-routes");
const reactionRouter = require("./routes/reaction-routes");
const friendRouter = require("./routes/friend-routes");
const reportRouter = require("./routes/report-routes");
const statusRouter = require("./routes/status-route");


app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use("/users", userRouter);  
app.use("/posts", postRouter);
app.use("/comments", commentRouter);
app.use("/dmessages", dmessageRouter);
app.use("/gmessages", gmessageRouter);
app.use("reaction", reactionRouter);
app.use("/friends", friendRouter);
app.use("/reports", reportRouter);
app.use("/status", statusRouter)


mongoose.connect(process.env.MONGO_URL).
then(app.listen(1776, () => console.log("Server running on port 1776"))).
catch((err) => console.log(err));