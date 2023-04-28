const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const statusSchema = new Schema({
    text: {
        type: String
    },
    media: {
        data: Buffer,
        contentType: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Status", statusSchema);