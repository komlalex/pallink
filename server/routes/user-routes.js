const User = require("../models/user-model");
const express = require("express");
const router = express.Router();

router.post("/register", async (req, res) => {
    const newUser = new User(req.body);
    await newUser.save();
    res.json({success: true, message: "Registration Successful"})
})

module.exports = router;