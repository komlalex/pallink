const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema ({
    userId: {
        type: String,
        required: true
    },
    postId: {
        type: String,
        required: true
    },
    commentBody: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now
    }
});

module.exports = mongoose.model("Comment", commentSchema);