const Message = require('../models/messageModel');
const Conversation = require('../models/conversationModel');
const User = require('../models/userModel');
const helper = require('../helper/index');

exports.sendMessage = async (req, res) => {
    try {
        let payload = req.body;
        let senderId = req.user.userId;
        let receiverId = payload.receiverId;
        let message = payload.message;
        let conversation = await Conversation.findOne({ participants: { $all: [senderId, receiverId] } });
        if (!conversation) {
            let newConversation = new Conversation({
                participants: [senderId, receiverId],
            });
            let conversationResult = await newConversation.save();
            if (conversationResult) {
                let newMessage = new Message({
                    senderId: senderId,
                    message: message,
                });
                let messageResult = await newMessage.save();
                if (messageResult) {
                    let updateConversation = await Conversation.findByIdAndUpdate(conversationResult._id, { $push: { messages: messageResult._id } }, { new: true });
                    if (updateConversation) {
                        return res.status(200).json(helper.response(200, true, "Message Send Successfully!", { messageResult: messageResult }));
                    } else {
                        return res.status(400).json(helper.response(400, false, "Message Send Failed!"));
                    }
                } else {
                    return res.status(400).json(helper.response(400, false, "Message Send Failed!"));
                }
            } else {
                return res.status(400).json(helper.response(400, false, "Message Send Failed!"));
            }
        } else {
            let newMessage = new Message({
                senderId: senderId,
                message: message,
            });
            let messageResult = await newMessage.save();
            if (messageResult) {
                let updateConversation = await Conversation.findByIdAndUpdate(conversation._id, { $push: { messages: messageResult._id } }, { new: true });
                if (updateConversation) {
                    return res.status(200).json(helper.response(200, true, "Message Send Successfully!", { messageResult: messageResult }));
                } else {
                    return res.status(400).json(helper.response(400, false, "Message Send Failed!"));
                }
            } else {
                return res.status(400).json(helper.response(400, false, "Message Send Failed!"));
            }
        }
    } catch (error) {
        return res.status(500).json(helper.response(500, false, "something went wrong!"));
    }
}

exports.messageList = async (req, res) => {
    try {
        let senderId = req.user.userId;
        let receiverId = req.query.receiverId;
        let conversation = await Conversation.findOne({ participants: { $all: [senderId, receiverId] } }).populate('messages');
        if (!conversation) {
            return res.status(400).json(helper.response(400, false, "Message Not Found!"));
        }
        return res.status(200).json(helper.response(200, true, "Message List!", conversation.messages));
    } catch (error) {
        return res.status(500).json(helper.response(500, false, "something went wrong!"));
    }
}