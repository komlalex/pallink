const User = require("../models/user-model");
const express = require("express");
const router = express.Router();

//Import controller functions 
const {addUser, getAllUsers, updateUser} = require("../controllers/user-controllers")

router.post("/register", addUser); 
router.get("/", getAllUsers);
router.put("/:userId", updateUser);

module.exports = router;