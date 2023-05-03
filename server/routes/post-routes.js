const express = require("express");
const multer = require("multer");
const storage = multer.memoryStorage();
const upload = multer({storage: storage});
const router = express.Router();
const {createPost, getAllPosts, getAllPostsByPosterId, deletePostById, updatePost} = require("../controllers/post-controllers")

router.post("/create/:posterId", upload.single("files"), createPost);
router.get("/", getAllPosts);
router.get("/:posterId", getAllPostsByPosterId);
router.delete("/:postId", deletePostById);
router.put("/:postId", updatePost);



module.exports = router;