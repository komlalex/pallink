const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema ({
    firstname: {
        type: STRING,
        required: true
    },
    lastname: {
        type: STRING,
        required: true
    },
    nickname: {
        type: STRING,
        required: false
    },
    email: {
        type: STRING
    },
    password: {
        type: STRING,
        required: true
    },
    about: {
        type: STRING,
        required: false
    },
    profilepicture: {
        data: Buffer,
        contentType: STRING
    }
});

module.exports = mongoose.model("User", userSchema);