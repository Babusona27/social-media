const userSchema = require('../models/userModel');
const userFriendSchema = require('../models/userFriend');
const helper = require('../helper/index');
const bcrypt = require('bcrypt');
const jwt_token = require('jsonwebtoken');
const { validateRegister, validateLogin } = require('../validation/validation');

exports.register = async (req, res) => {
    try {
        let payload = req.body;
        let result = validateRegister(payload);
        if (result.error) {
            return res.status(400).json(helper.response(400, false, (result.error.details[0].message).replace(/\\?"|\\?"/g, '')));
        }
        let email = await userSchema.findOne({ email: payload.email });
        if (email) {
            return res.status(400).json(helper.response(400, false, "Email Already Exist!"));
        }
        let phone = await userSchema.findOne({ phone: payload.phone });
        if (phone) {
            return res.status(400).json(helper.response(400, false, "Phone Already Exist!"));
        }
        let hashPassword = await bcrypt.hash(payload.password, 10);
        let user = new userSchema({
            name: payload.name,
            email: payload.email,
            password: hashPassword,
            phone: payload.phone,
            dob: payload.dob,
            gender: payload.gender,
        });
        let userResult = await user.save();
        if (userResult) {
            const token = jwt_token.sign({ userId: result._id }, process.env.JWT_SECRET, {
                expiresIn: process.env.JWT_EXPIRE,
            });
            return res.status(200).json(helper.response(200, true, "User Register Successfully!", { userResult: userResult, token: token }));
        } else {
            return res.status(400).json(helper.response(400, false, "User Register Failed!"));
        }
    } catch (error) {
        return res.status(500).json(helper.response(500, false, "something went wrong!"));
    }
}

exports.login = async (req, res) => {
    try {
        let payload = req.body;
        let result = validateLogin(payload);
        if (result.error) {
            return res.status(400).json(helper.response(400, false, (result.error.details[0].message).replace(/\\?"|\\?"/g, '')));
        }
        let user = await userSchema.findOne({ $or: [{ email: payload.email }, { phone: payload.phone }] });
        if (!user) {
            return res.status(400).json(helper.response(400, false, "User Not Found!"));
        }
        let comparePassword = await bcrypt.compare(payload.password, user.password);
        if (!comparePassword) {
            return res.status(400).json(helper.response(400, false, "Invalid Password!"));
        }
        const token = jwt_token.sign({ userId: user._id }, process.env.JWT_SECRET, {
            expiresIn: process.env.JWT_EXPIRE,
        });
        return res.status(200).json(helper.response(200, true, "Login Successfully!", { user: user, token: token }));
    } catch (error) {
        return res.status(500).json(helper.response(500, false, "something went wrong!"));
    }
}

exports.sendFriendRequest = async (req, res) => {
    try {
        let payload = req.body;
        let user = await userSchema.findById(payload.user_id_1);
        if (!user) {
            return res.status(400).json(helper.response(400, false, "User Not Found!"));
        }
        let userFriend = await userFriendSchema.findOne({ user_id_2: req.user.userId, user_id_1: payload.user_id_1 });
        if (userFriend) {
            return res.status(400).json(helper.response(400, false, "Friend Request Already Sent!"));
        }
        let userFriend1 = new userFriendSchema({
            user_id_1: payload.user_id_1,
            user_id_2: req.user.userId,
            status: payload.status
        });
        let userFriendResult = await userFriend1.save();
        if (userFriendResult) {
            return res.status(200).json(helper.response(200, true, "Friend Request Sent Successfully!", userFriendResult));
        } else {
            return res.status(400).json(helper.response(400, false, "Friend Request Sent Failed!"));
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json(helper.response(500, false, "something went wrong!"));
    }
}

exports.friendRequestList = async (req, res) => {
    try {
        let userFriend = await userFriendSchema.find({ user_id_2: req.user.userId, status: "pending" }).populate('user_id_1');
        if (userFriend) {
            return res.status(200).json(helper.response(200, true, "Friend Request List!", userFriend));
        } else {
            return res.status(400).json(helper.response(400, false, "Friend Request List Not Found!"));
        }
    } catch (error) {
        return res.status(500).json(helper.response(500, false, "something went wrong!"));
    }
}

exports.friendRequestStatusUpdate = async (req, res) => {
    try {
        let payload = req.body;
        let userFriend = await userFriendSchema.findOne({ user_id_1: payload.user_id_1, user_id_2: req.user.userId });
        if (!userFriend) {
            return res.status(400).json(helper.response(400, false, "Friend Request Not Found!"));
        }
        if (payload.status) {
            userFriend.status = payload.status;
        }
        let userFriendResult = await userFriend.save();
        if (userFriendResult) {
            return res.status(200).json(helper.response(200, true, "Friend Request Status Update Successfully!", userFriendResult));
        } else {
            return res.status(400).json(helper.response(400, false, "Friend Request Status Update Failed!"));
        }
    } catch (error) {
        return res.status(500).json(helper.response(500, false, "something went wrong!"));
    }
}