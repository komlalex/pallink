const express = require("express");
const router = express.Router();
const {createPost, getAllPosts, getAllPostsByPosterId, deletePostById} = require("../controllers/post-controllers")

router.post("/create", createPost);
router.get("/", getAllPosts);
router.get("/:posterId", getAllPostsByPosterId);
router.delete("/:postId", deletePostById)



module.exports = router;