const express = require("express");
const router = express.Router();
const {getAllLikesForAPost} = require("../controllers/reaction-controllers")

router.get("/:postId", getAllLikesForAPost)
module.exports = router;