const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const friendSchema = new Schema({
    sender: {
        type: String,
        required: true
    },
    recipient: {
        type: String,
        required: true
    },
    accepted: {
        type: Boolean,
        required: true,
        default: false
    },
    since: {
        type: Date,
        required: false
    }
})

module.exports = mongoose.model("Friend", friendSchema)