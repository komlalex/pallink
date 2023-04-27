const Post = require("../models/post-model");
const User = require("../models/user-model");

const createPost = async (req, res) => {
    const {posterId, text, media, tags, visibility, createdAt} = req.body;
    let checkPoster;

    if (!posterId || !posterId.trim() || !text || !text.trim()) {
        res.status(400).json({success: false, message: "You left a required field empty"})
    } else {
        try {
            checkPoster = await User.find().where("_id").eq(posterId);
            
            
        } catch (err) {
            if (!checkPoster) {
                return res.status(404).json({success: false, message: "Unauthorized! Please log in. "});
            }
        }
        
        
        try {
            const newPost = new Post({posterId, text, media, tags, visibility, createdAt});
            newPost.save();
            return res.status(201).json({success: true, message: "Post created successfully."})
        } catch (err) {
            return res.json({success: false, message: err.message});
        }
    } 
}

const getAllPosts = async (req, res) => {
    let allPosts;
    try {
        allPosts = await Post.find();
        return res.status(200).json({success: true, message: allPosts})
    } catch (err) {
        return res.status(500).json({success: false, message: "Something went wrong."})
    }
}

const getAllPostsByPosterId = async (req, res) => {
    const posterId = req.params.posterId;

    if (!posterId) return res.json({success: false, message: "Please log in."})
    let allPosts;

    try {
        allPosts = await Post.find().where("posterId").eq(posterId);

        return res.json({success: true, message: allPosts});
    } catch (err) {
        return res.json({success: false, message: err.message});
    }
}

const deletePostById = async (req, res) => {
    const postId = req.params.postId.trim();
    let post;
    if (!postId) return res.json({success: false, message: "Post deletion failed."});

    try {
        await Post.findByIdAndDelete(postId);
        return res.json({success: true, message: "Post deletion successful."});
    } catch (err) {
        return res.json({success: false, message: "Post deletion failed"});
    }         
}

const updatePost = async (req, res) => {
    const postId = req.params.postId;
    const {text, media, visibility, tags} = req.body;

    if (!postId) return res.status(400).json({sucess: false, message: "Update failed"});

    try {
        await Post.findByIdAndUpdate(postId, {text: text, visibility: visibility, media: media, tags: tags});
        return res.json({success:true, message: "Update Successful."});
    } catch (err) {
        return res.json({success: false, message: "Update failed"});
    }
}

module.exports = {createPost, getAllPosts, getAllPostsByPosterId, deletePostById, updatePost}