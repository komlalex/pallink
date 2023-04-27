const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({

    posterId: {
        type: String,
        required: true,
    },
    
    text: {
        type: String,
        required: true,
        maxLength: 100
    },
    media: {
        data: Buffer,
        contentType: String,
    },   
    tags: {
        type: Array,
        required: false
    },
    visibility: {  
        type: String,
        required: true,
        default: "public"
    },
    createdAt: {        
        type: Date,
        required: true,
        default: Date.now
    }

})

module.exports = mongoose.model("Post", postSchema);