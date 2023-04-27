const express = require("express");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config()

//Importing routes
const userRouter = require("./routes/user-routes");


app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use("/users", userRouter);  


mongoose.connect(process.env.MONGO_URL).
then(app.listen(1776, () => console.log("Server running on port 1776"))).
catch((err) => console.log(err));