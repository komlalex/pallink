const express = require("express");
const router = express.Router();
const {createStatus} = require("../controllers/status-controllers")

router.post("/", createStatus);
module.exports = router;