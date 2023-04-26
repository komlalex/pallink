const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config()

const app = express();

app.use(express.json());
app.use(express.urlencoded())

mongoose.connect(MONGO_URL).
then(app.listen(1776, () => console.log("Server running on port 1776"))).
catch((err) => console.log(err));