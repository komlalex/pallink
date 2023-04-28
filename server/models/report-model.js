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
    isReviewed: {
        type: Boolean,
        required: true,
        default: false
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now
    }
});
module.exports = mongoose.model("Report", reportSchema);