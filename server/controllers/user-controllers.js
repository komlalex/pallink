const User = require("../models/user-model");
const {validate} = require("deep-email-validator")

const addUser = async (req, res) => {
    const {firstname, lastname, email, password} = req.body;
    let userToAdd;

    //Ensure an empty field is not allowed
    if (!firstname || !firstname.trim() || !lastname || !lastname.trim() || !email || !email.trim() || !password || !password.trim()) {
        return res.status(400).json({success: false, message: "You left a required field empty"})
    } else {
    //validate email with deep-email-validator
        const validationResponse = await validate(email);
        
        if (validationResponse.valid === false ) return res.status(400).json({success: false, message: "Invalid Email"});
    // Check for the existence of the email in the database and prevent reusing
        const usedEmail = await User.find().where("email").eq(email);
    
        if (usedEmail.length > 0) return res.status(400).json({success: false, message: "Email already used. Please log in."})
        

        try {
            userToAdd = new User({firstname, lastname, email, password});
            await userToAdd.save();
            res.status(201).json({success: true, message: "Registration Successful"})
        } catch (err) {
            res.json({success: false, message: err.message})
        }
    }
}

const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();

        if (users) return res.status(200).json({success: true, message: users});
    } catch (err) {
        res.status(500).json({success: false, message: err.message}) 
    }
}

const updateUser = async (req, res) => {
    const id = req.params.id;
    //CONTINUE HEREEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE
    if (!id) return res.status(400).json({success: false, message: "User not recognized"});

    try {
        
    } catch (err) {   
        res.json({success: false, message: err.message})
    }
}
const login = async (req, res) => {

}
const deleteUser = async (req, res) => {

}

module.exports = {addUser, getAllUsers, updateUser, login, deleteUser};