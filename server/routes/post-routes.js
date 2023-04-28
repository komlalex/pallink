const express = require("express");
const router = express.Router();
const {createPost, getAllPosts, getAllPostsByPosterId, deletePostById, updatePost} = require("../controllers/post-controllers")

router.post("/create/:posterId", createPost);
router.get("/", getAllPosts);
router.get("/:posterId", getAllPostsByPosterId);
router.delete("/:postId", deletePostById);
router.put("/:postId", updatePost);



module.exports = router;