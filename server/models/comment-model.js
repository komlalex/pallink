const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema ({
    posterId: {
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
    }
});

module.exports = mongoose.model("Comment", commentSchema);