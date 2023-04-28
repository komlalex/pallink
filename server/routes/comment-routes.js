const express = require("express");
const router = express.Router();
const {createComment, getAllCommentsUnderAPost, deleteComment, updateComment} = require("../controllers/comment-controllers");

router.post("/:commenterId/:postId", createComment);
router.get("/:postId", getAllCommentsUnderAPost);
router.delete("/:commentId", deleteComment);
router.put("/:commentId", updateComment)

module.exports = router;