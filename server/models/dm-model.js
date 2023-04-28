const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const dmSchema = new Schema({
    sender: {
        type: String,
        required: true
    },
    recipient: {
        type: String,
        required: true
    },
    seen: {
        type: Boolean,
        required: true,
        default: false
    },
    
    deletedBySender: {
        type: Boolean,
        required: true,
        default: false
    },
    deletedByRecipient: {
        type: Boolean,
        required: true,
        default: false
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now
    }
})

module.exports = mongoose.model("Dm", dmSchema);