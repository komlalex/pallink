const express = require("express");
const router = express.Router();
const {createMessage, getAllMessagesInAGroup} = require("../controllers/gmessage-controllers");

router.post("/create/:groupId/:senderId", createMessage);
router.get("/read/:groupId", getAllMessagesInAGroup);


module.exports = router;