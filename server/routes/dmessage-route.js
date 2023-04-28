const express = require("express");
const router = express.Router();
const {createMessage} = require("../controllers/dmessage-controllers")

router.post("/:recipientId", createMessage);


module.exports = router;