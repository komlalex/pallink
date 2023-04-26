const express = require("express");
const mongoose = require("mongoose");

const app = express();

mongoose.connect("mongodb://localhost/pallink").
then(app.listen(1776, () => console.log("Server running on port 1776"))).
catch((err) => console.log(err));