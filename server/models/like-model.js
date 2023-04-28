const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const reactionModel = new Schema({
    postId: {
        type: String,
        required: true
    },
    userId: { 
        type: String,
        required: true
    },
    reaction: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model("Reaction", reactionModel);