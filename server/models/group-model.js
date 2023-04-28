const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const groupSchema = new Schema({
    groupName: {
        type: String,
        required: true
    },
    about: {
        type: String,
        required: false
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now
    }
});

module.exports = mongoose.model("Group", groupSchema);