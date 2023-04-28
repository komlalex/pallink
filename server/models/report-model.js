const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const reportSchema = new Schema({
    reporterId: {
        type: String,
        required: true
    },
    reportType: {
        type: String,
        required: true
    },
    itemId: {
        type: String,
        required: true
    },
    reviewed: {
        type: Boolean,
        required: true,
        default: false
    }
})