const userSchema = require('../models/userModel');
const userHobbiesSchema = require('../models/userHobbiesModel');
const userFriendSchema = require('../models/userFriend');
const userFollowSchema = require('../models/userFollow');
const messageSchema = require('../models/messageModel');
const conversationSchema = require('../models/conversationModel');
const helper = require('../helper/index');
const bcrypt = require('bcrypt');
const jwt_token = require('jsonwebtoken');
const { validateRegister, validateLogin } = require('../validation/validation');

exports.register = async (req, res) => {
    try {
        let payload = req.body;
        let result = validateRegister(payload);
        if (result.error) {
            return res.status(200).json(helper.response(200, false, (result.error.details[0].message).replace(/\\?"|\\?"/g, '')));
        }
        let email = await userSchema.findOne({ email: payload.email });
        if (email) {
            return res.status(200).json(helper.response(200, false, "Email Already Exist!"));
        }
        let phone = await userSchema.findOne({ phone: payload.phone });
        if (phone) {
            return res.status(200).json(helper.response(200, false, "Phone Already Exist!"));
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
            return res.status(200).json(helper.response(200, true, "User Register Successfully!", { user: userResult, token: token }));
        } else {
            return res.status(200).json(helper.response(200, false, "User Register Failed!"));
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
            return res.status(200).json(helper.response(200, false, (result.error.details[0].message).replace(/\\?"|\\?"/g, '')));
        }
        let user = await userSchema.findOne({ $or: [{ email: payload.email }, { phone: payload.phone }] });
        if (!user) {
            return res.status(200).json(helper.response(200, false, "User Not Found!"));
        }
        let comparePassword = await bcrypt.compare(payload.password, user.password);
        if (!comparePassword) {
            return res.status(200).json(helper.response(200, false, "Invalid Password!"));
        }
        const token = jwt_token.sign({ userId: user._id }, process.env.JWT_SECRET, {
            expiresIn: process.env.JWT_EXPIRE,
        });
        let userResult = await userSchema.findById(user._id).populate('hobbies');
        return res.status(200).json(helper.response(200, true, "Login Successfully!", { user: userResult, token: token }));
    } catch (error) {
        return res.status(500).json(helper.response(500, false, "something went wrong!"));
    }
}

exports.userList = async (req, res) => {
    try {
        let limit = parseInt(req.query.limit) || 10;
        let offSet = parseInt(req.query.offSet) || 0;
        let userFriend = await userFriendSchema.find({ $or: [{ user_id_1: req.user.userId }, { user_id_2: req.user.userId }], status: { $in: ["accepted", "pending"] } });
        let userFriendId = userFriend.map((item) => {
            if (item.user_id_1 == req.user.userId) {
                return item.user_id_2;
            } else {
                return item.user_id_1;
            }
        });
        userFriendId.push(req.user.userId);
        let userList = await userSchema.find({ _id: { $nin: userFriendId } }).skip(offSet).limit(limit);
        if (userList) {
            return res.status(200).json(helper.response(200, true, "User List!", userList));
        } else {
            return res.status(200).json(helper.response(200, false, "User List Not Found!"));
        }
    }
    catch (error) {
        return res.status(500).json(helper.response(500, false, "something went wrong!"));
    }
}

exports.profile = async (req, res) => {
    try {
        let user = await userSchema.findById(req.user.userId).populate('hobbies');
        if (!user) {
            return res.status(200).json(helper.response(200, false, "User Not Found!"));
        }
        return res.status(200).json(helper.response(200, true, "User Profile!", user));
    } catch (error) {
        return res.status(500).json(helper.response(500, false, "something went wrong!"));
    }
}

exports.updateProfile = async (req, res) => {
    try {
        let payload = req.body;
        let user = await userSchema.findById(req.user.userId);
        if (!user) {
            return res.status(200).json(helper.response(200, false, "User Not Found!"));
        }
        if (payload.name) {
            user.name = payload.name;
        }
        // if (payload.email) {
        //     user.email = payload.email;
        // }
        // if (payload.phone) {
        //     user.phone = payload.phone;
        // }
        if (payload.dob) {
            user.dob = payload.dob;
        }
        if (payload.gender) {
            user.gender = payload.gender;
        }
        if (payload.latitude) {
            user.latitude = payload.latitude;
        }
        if (payload.longitude) {
            user.longitude = payload.longitude;
        }
        if (payload.about_me) {
            user.about_me = payload.about_me;
        }
        if (payload.university_name) {
            user.university_name = payload.university_name;
        }
        if (payload.from) {
            user.from = payload.from;
        }
        if (payload.to) {
            user.to = payload.to;
        }
        if (payload.education_description) {
            user.education_description = payload.education_description;
        }
        if (payload.company_name) {
            user.company_name = payload.company_name;
        }
        if (payload.work_description) {
            user.work_description = payload.work_description;
        }
        if (payload.designation) {
            user.designation = payload.designation;
        }
        if (payload.company_city) {
            user.company_city = payload.company_city;
        }
        if (payload.hobbies) {
            let hobbies = await Promise.all(payload.hobbies.map(async (hobbyName) => {
                let hobby = new userHobbiesSchema({ name: hobbyName });
                await hobby.save();
                return hobby._id;
            }));
            user.hobbies = hobbies;
        }
        if (payload.follow_me !== undefined) {
            user.follow_me = payload.follow_me;
        }
        if (payload.send_notification !== undefined) {
            user.send_notification = payload.send_notification;
        }
        if (payload.enable_tagging !== undefined) {
            user.enable_tagging = payload.enable_tagging;
        }
        if (payload.image) {
            user.image = payload.image;
        }
        let userResult = await user.save();
        if (userResult) {
            let user = await userSchema.findById(req.user.userId).populate('hobbies');
            return res.status(200).json(helper.response(200, true, "User Profile Update Successfully!", { user: user }));
        } else {
            return res.status(200).json(helper.response(200, false, "User Profile Update Failed!"));
        }
    } catch (error) {
        return res.status(500).json(helper.response(500, false, "something went wrong!"));
    }
}

exports.sendFriendRequest = async (req, res) => {
    try {
        let payload = req.body;
        let user = await userSchema.findById(payload.user_id_1);
        if (!user) {
            return res.status(200).json(helper.response(200, false, "User Not Found!"));
        }
        let userFriend = await userFriendSchema.findOne({ user_id_2: req.user.userId, user_id_1: payload.user_id_1 });
        if (userFriend) {
            return res.status(200).json(helper.response(200, false, "Friend Request Already Sent!"));
        }
        const getChatId = (uid1, uid2) => {
            const sortedUids = [uid1, uid2].sort();
            return sortedUids.join('_');
        };
        let userFriend1 = new userFriendSchema({
            user_id_1: payload.user_id_1,
            user_id_2: req.user.userId,
            status: payload.status,
            chat_id: getChatId(payload.user_id_1, req.user.userId)
        });
        let userFriendResult = await userFriend1.save();
        if (userFriendResult) {
            return res.status(200).json(helper.response(200, true, "Friend Request Sent Successfully!", userFriendResult));
        } else {
            return res.status(200).json(helper.response(200, false, "Friend Request Sent Failed!"));
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json(helper.response(500, false, "something went wrong!"));
    }
}

exports.friendRequestList = async (req, res) => {
    try {
        let userFriend = await userFriendSchema.find({ user_id_1: req.user.userId, status: "pending" }).populate('user_id_2');
        if (userFriend) {
            return res.status(200).json(helper.response(200, true, "Friend Request List!", userFriend));
        } else {
            return res.status(200).json(helper.response(200, false, "Friend Request List Not Found!"));
        }
    } catch (error) {
        return res.status(500).json(helper.response(500, false, "something went wrong!"));
    }
}

exports.friendRequestStatusUpdate = async (req, res) => {
    try {
        let payload = req.body;
        let userFriend = await userFriendSchema.findOne({ user_id_2: payload.user_id_1, user_id_1: req.user.userId });
        if (!userFriend) {
            return res.status(200).json(helper.response(200, false, "Friend Request Not Found!"));
        }
        if (payload.status) {
            userFriend.status = payload.status;
        }
        let userFriendResult = await userFriend.save();
        if (userFriendResult) {
            return res.status(200).json(helper.response(200, true, "Friend Request Status Update Successfully!", userFriendResult));
        } else {
            return res.status(200).json(helper.response(200, false, "Friend Request Status Update Failed!"));
        }
    } catch (error) {
        return res.status(500).json(helper.response(500, false, "something went wrong!"));
    }
}

exports.friendList = async (req, res) => {
    try {
        // Get the user's friend list excluding the logged-in user
        let userFriend = await userFriendSchema
            .find({
                $or: [
                    { user_id_1: req.user.userId },
                    { user_id_2: req.user.userId },
                ],
                status: "accepted",
            })
            .populate({
                path: 'user_id_1',
                match: { _id: { $ne: req.user.userId } }, // Exclude the logged-in user
                select: 'name email phone dob gender hobbies follow_me send_notification enable_tagging', // Include only desired fields
            })
            .populate({
                path: 'user_id_2',
                match: { _id: { $ne: req.user.userId } },
                select: 'name email phone dob gender hobbies follow_me send_notification enable_tagging',
            });

        // Flatten the data structure
        const flattenedFriendList = await Promise.all(userFriend.map(async (friend) => {
            const friendObject = friend.user_id_1 || friend.user_id_2;
            if (friendObject) {
                // Find conversation between the logged-in user and the friend
                const conversation = await conversationSchema.findOne({
                    participants: { $all: [req.user.userId, friendObject._id] },
                });

                let lastMessage = null;
                if (conversation) {
                    lastMessage = await messageSchema.findOne({ _id: { $in: conversation.messages } })
                        .sort({ createdAt: -1 });
                }
                const friendDetails = await userSchema.findById(friendObject._id);

                return {
                    _id: friend._id,
                    status: friend.status,
                    created_at: friend.created_at,
                    chat_id: friend.chat_id,
                    lastMessage: lastMessage,
                    image: friendDetails && friendDetails.image ? friendDetails.image : '',


                    ...friendObject.toObject(),
                };
            }
        }));

        if (flattenedFriendList.length > 0) {
            return res
                .status(200)
                .json(helper.response(200, true, "Friend List!", flattenedFriendList));
        } else {
            return res
                .status(200)
                .json(helper.response(200, false, "Friend List Not Found!"));
        }
    } catch (error) {
        console.error(error);
        return res
            .status(500)
            .json(helper.response(500, false, "Something went wrong!"));
    }
};

exports.friendDelete = async (req, res) => {
    try {
        let payload = req.body;
        let userFriend = await userFriendSchema.findOne({ $or: [{ user_id_1: req.user.userId, user_id_2: payload.friend_id }, { user_id_1: payload.friend_id, user_id_2: req.user.userId }] });
        if (!userFriend) {
            return res.status(200).json(helper.response(200, false, "Friend Not Found!"));
        }
        let userFriendResult = await userFriend.deleteOne({ _id: userFriend._id });
        if (userFriendResult) {
            return res.status(200).json(helper.response(200, true, "Friend Delete Successfully!", userFriendResult));
        } else {
            return res.status(200).json(helper.response(200, false, "Friend Delete Failed!"));
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json(helper.response(500, false, "something went wrong!"));
    }
}

exports.followUser = async (req, res) => {
    try {
        let payload = req.body;
        let user = await userSchema.findById(payload.followUserId);
        if (!user) {
            return res.status(200).json(helper.response(200, false, "User Not Found!"));
        }
        let userFollow = await userFollowSchema.findOne({ userId: req.user.userId, followUserId: payload.followUserId });
        if (userFollow) {
            return res.status(200).json(helper.response(200, false, "User Already Followed!"));
        }
        let userFollow1 = new userFollowSchema({
            userId: req.user.userId,
            followUserId: payload.followUserId
        });
        let userFollowResult = await userFollow1.save();
        if (userFollowResult) {
            return res.status(200).json(helper.response(200, true, "User Followed Successfully!", userFollowResult));
        } else {
            return res.status(200).json(helper.response(200, false, "User Followed Failed!"));
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json(helper.response(500, false, "something went wrong!"));
    }
}

exports.followUserList = async (req, res) => {
    try {
        let userFollow = await userFollowSchema.find({ $or: [{ userId: req.user.userId }, { followUserId: req.user.userId }] }).populate('userId').populate('followUserId');
        if (userFollow) {
            return res.status(200).json(helper.response(200, true, "Follow User List!", userFollow));
        } else {
            return res.status(200).json(helper.response(200, false, "Follow User List Not Found!"));
        }
    } catch (error) {
        return res.status(500).json(helper.response(500, false, "something went wrong!"));
    }
}