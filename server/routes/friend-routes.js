const express = require("express");
const router = express.Router();
const {addFriend} = require("../controllers/friend-controllers")

router.post("/add", addFriend);



module.exports = router;