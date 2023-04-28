const GMessage = require("../models/gmessage-model");
const Group = require("../models/group-model");
const GMemember = require("../models/gmembers-model");

const createMessage = async (req, res) => {
    const groupId = req.params.groupId;
    const senderId = req.params.senderId; 
    const {message} = req.body;
    const trimmedMessage = message.trim();
    let isGroupMember;

    //Validate user
    if (!groupId || !groupId.trim() || !senderId || !senderId.trim()) return res.json({success: false, message: "Bad request"});
    if (!trimmedMessage) return res.json({success: false, message: "A void message cannot be sent."});

    try {
        isGroupMember = await GMemember.find().where("memberId").eq(senderId).where("groupId").eq(groupId);

        if (isGroupMember.length < 1) return res.json({success: false, message: "Not a group member"})
    } catch (err) {
        return res.json({success: false, message: "Not a group member: " + err.message})
    } 

    //Add message 
    try {
        const newMessage = new GMessage({groupId: groupId, senderId: senderId, message: trimmedMessage});
        await newMessage.save();
        return res.json({success: true, message: "Message sent"});
    } catch (err) {
        return res.json({success: false, message: err.message})
    }
    
    

}

const getAllMessagesInAGroup = async (req, res) => {
    const groupId = req.params.groupId;
    let allMessages;

    if (!groupId || !groupId.trim()) return res.json({success: false, message: "Bad request"});

    try {
        allMessages = await   GMessage.find().where("groupId").eq(groupId);
        return res.json({success: true, message: allMessages})
    } catch (err) {
        return res.json({success: true, message: err.message})
    }
}

module.exports = {createMessage, getAllMessagesInAGroup}