const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const gMessageSchema = new Schema({
    groupId: {
        type: String,
        required: true
    },
    senderId: { 
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    createdAt: {
        type: String,
        required: true,
        default: Date.now
    }
})

module.exports = mongoose.model("GMessages", gMessageSchema);