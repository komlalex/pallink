const express = require("express");
const router = express.Router();
const {createMessage} = require("../controllers/dm-controllers")

router.post("/:recipientId", createMessage);


module.exports = router;