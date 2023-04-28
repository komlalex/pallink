const Comment = require("../models/comment-model");
const Post = require("../models/post-model");
const User = require("../models/user-model");


const createComment = async (req, res) =>  {
    const commenterId = req.params.commenterId;
    const postId = req.params.postId;
    const {commentBody} = req.body;
    let newComment;
    let postExists;
    let commenterExists;

    //Check posterId, postId and commentBody
    if (!postId.trim() || !commenterId.trim()) return res.json({success: false, message: "Comment Failed. Empty field."});
    if (!commentBody || !commentBody.trim()) return res.json({success: false, message: "Please type a comment. Empty field"})

    //Check to ensure the post actually exists
    try {
        postExists = await Post.find().where("_id").eq(postId);

        if (postExists.length < 1) return res.status(400).json({success: false, message: "Post not found."});
    } catch (err) {
        return res.status(400).json({success: false, message: "Post not found "})
    }

    //Check to ensure the commenter actually exists
    try {
        commenterExists = await User.find().where("_id").eq(commenterId);

        if (commenterExists.length < 1) return res.json({success: false, message: "Unauthorized. Please log in!"})
    } catch (err) {
        return res.status(401).json({success: false, message: "Unauthorized. Please log in!" })
    }
    //Add the comment to the database
    try {
        newComment = new Comment({commenterId, postId, commentBody});
        await newComment.save()
        return res.status(201).json({succcess: true, message: "Comment Successful"})
    } catch (err) {
        return res.json({succcess: false, message: "Comment failed"})
    }
}

const getAllCommentsUnderAPost = async (req, res) => {
    const postId = req.params.postId;
    let postExists;
    let allPosts;
    //Check if the post exists
    try {
        postExists = await Post.find().where("_id").eq(postId);

        if (postExists.length < 1) return res.status(400).json({success: false, message: "Post not found"});
    } catch (err) {
       return  res.status(400).json({success: false, message: "Post not found: " + err.message})
    }
    //Fetch posts
    try {
        allPosts = await Comment.find().where("postId").eq(postId);
        return res.status(200).json({success: true, message: allPosts})
    } catch (err) {
        return res.json({success: false, message: "Internal Server Error"});
    }
    
}

const deleteComment = async (req, res) => {
    const commentId = req.params.commentId;
    
    try {
        await Comment.findByIdAndDelete(commentId);
        return res.status(200).json({success: true, message: "Comment deleted"})
    } catch (err) {
        return res.json({success: false, message: "Deletion failed"})
    }

}


const updateComment = async (req, res) => {
    const commentId = req.params.commentId;
    const {commentBody} = req.body;
    const newCommentBody = commentBody.trim();

    if (!newCommentBody) return res.status(400).json({success: false, message: "Please enter commment"});

    try {
        await Comment.findByIdAndUpdate(commentId, {commentBody: newCommentBody});
        return res.status(200).json({success: true, message: "Comment Update Successful"})
    } catch (err) {
        return res.json({success: false, message: "Update failed: " + err.message})
    }
}

//CHANGE THE createPost route TO AVOID EXPOSING THE USER'S ID
module.exports = {createComment, getAllCommentsUnderAPost, deleteComment, updateComment};