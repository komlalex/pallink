const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const gMemberSchema = new Schema({
    memberId: {
        type: String,
        require: true 
    },
    groupId: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false
    }
})

module.exports = mongoose.model("Gmember", gMemberSchema);