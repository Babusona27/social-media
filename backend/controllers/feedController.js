const feedSchema = require('../models/feedModel');
const userSchema = require('../models/userModel');
const userFriendSchema = require('../models/userFriend');
const helper = require('../helper/index');

exports.createFeed = async (req, res) => {
    try {
        let payload = req.body;
        let userId = req.user.userId;
        let feed = new feedSchema({
            title: payload.title,
            description: payload.description,
            // feedType: payload.feedType,
            image: payload.image,
            video: payload.video,
            createdBy: userId,
        });
        let feedResult = await feed.save();
        if (feedResult) {
            return res.status(200).json(helper.response(200, true, "Feed Created Successfully!", { feedList: feedResult }));
        } else {
            return res.status(200).json(helper.response(200, false, "Feed Created Failed!"));
        }
    } catch (error) {
        return res.status(500).json(helper.response(500, false, "something went wrong!"));
    }
}

// exports.feedList = async (req, res) => {
//     try {
//         let userId = req.user.userId;
//         let limit = parseInt(req.query.limit) || 10;
//         let offSet = parseInt(req.query.offSet) || 0;
//         let query = { $or: [{ createdBy: userId }, { "tagFriend.userId": userId }] };
//         if (req.query.feedType) {
//             query.feedType = req.query.feedType;
//         }
//         let feedList = await feedSchema.find(query).populate('createdBy').populate('tagFriend.userId').populate('comment.userId').populate('comment.replyComment.userId').populate('reaction.userId').sort({ createdAt: -1 }).skip(offSet)
//             .limit(limit);
//         if (feedList) {
//             return res.status(200).json(helper.response(200, true, "Feed List!", { feedList: feedList }));
//         } else {
//             return res.status(200).json(helper.response(200, false, "Feed List Not Found!"));
//         }
//     } catch (error) {
//         return res.status(500).json(helper.response(500, false, "something went wrong!"));
//     }
// }

exports.feedList = async (req, res) => {
    try {
        let userId = req.user.userId;
        let limit = parseInt(req.query.limit) || 10;
        let offSet = parseInt(req.query.offSet) || 0;

        // Find the user's friends
        const userFriends = await userFriendSchema.find({
            $or: [
                { user_id_1: userId, status: 'accepted' },
                { user_id_2: userId, status: 'accepted' }
            ]
        });

        // Extract friend user IDs
        const friendUserIds = userFriends.map(friend => {
            return friend.user_id_1.equals(userId) ? friend.user_id_2 : friend.user_id_1;
        });

        // Add friends' feeds to the query
        let query = {
            $or: [
                { createdBy: userId },
                { "tagFriend.userId": userId },
                { createdBy: { $in: friendUserIds } } // Include feeds created by friends
            ]
        };

        if (req.query.feedType) {
            query.feedType = req.query.feedType;
        }

        let feedList = await feedSchema.find(query)
            .populate('createdBy')
            .populate('tagFriend.userId')
            .populate('comment.userId')
            .populate('comment.replyComment.userId')
            .populate('reaction.userId')
            .sort({ createdAt: -1 })
            .skip(offSet)
            .limit(limit);

        if (feedList) {
            return res.status(200).json(helper.response(200, true, "Feed List!", { feedList: feedList }));
        } else {
            return res.status(200).json(helper.response(200, false, "Feed List Not Found!"));
        }
    } catch (error) {
        return res.status(500).json(helper.response(500, false, "Something went wrong!"));
    }
};



exports.reactOnFeed = async (req, res) => {
    try {
        let payload = req.body;
        let feedId = payload.feedId;
        let reactionType = payload.reactionType;
        let userId = req.user.userId;
        let feed = await feedSchema.findById(feedId).populate('reaction.userId');
        if (feed) {
            let existingReactionIndex = feed.reaction.findIndex(r => r.userId._id.toString() === userId.toString());

            if (existingReactionIndex >= 0) {
                feed.reaction[existingReactionIndex].reactionType = reactionType;
            } else {
                let reaction = {
                    userId: userId,
                    reactionType: reactionType,
                }
                feed.reaction.push(reaction);
            }

            let updateFeed = await feed.save();

            if (updateFeed) {
                return res.status(200).json(helper.response(200, true, "Reaction Added Successfully!", { updateFeed: updateFeed }));
            } else {
                return res.status(200).json(helper.response(200, false, "Reaction Added Failed!"));
            }
        } else {
            return res.status(200).json(helper.response(200, false, "Feed Not Found!"));
        }
    } catch (error) {
        return res.status(500).json(helper.response(500, false, "something went wrong!"));
    }
}

exports.commentOnFeed = async (req, res) => {
    try {
        let payload = req.body;
        let feedId = payload.feedId;
        let userId = req.user.userId;
        let feed = await feedSchema.findById(feedId);
        if (feed) {
            let comment = {
                userId: userId,
                comment: payload.comment,
            }
            let updateFeed = await feedSchema.findByIdAndUpdate(feedId, { $push: { comment: comment } }, { new: true }).populate('comment.userId').populate('comment.replyComment.userId');
            if (updateFeed) {
                return res.status(200).json(helper.response(200, true, "Comment Added Successfully!", { updateFeed: updateFeed }));
            } else {
                return res.status(200).json(helper.response(200, false, "Comment Added Failed!"));
            }
        } else {
            return res.status(200).json(helper.response(200, false, "Feed Not Found!"));
        }
    } catch (error) {
        return res.status(500).json(helper.response(500, false, "something went wrong!"));
    }
}

exports.replyOnComment = async (req, res) => {
    try {
        let payload = req.body;
        let feedId = payload.feedId;
        let commentId = payload.commentId;
        let replyUserComment = payload.replyUserComment;
        let userId = req.user.userId;
        let feed = await feedSchema.findById(feedId);
        if (feed) {
            let updateFeed = await feedSchema.findOneAndUpdate({ _id: feedId, "comment._id": commentId }, { $push: { "comment.$.replyComment": { userId: userId, replyUserComment: replyUserComment } } }, { new: true }).populate('comment.userId').populate('comment.replyComment.userId');
            if (updateFeed) {
                return res.status(200).json(helper.response(200, true, "Reply Comment Added Successfully!", { updateFeed: updateFeed }));
            } else {
                return res.status(200).json(helper.response(200, false, "Reply Comment Added Failed!"));
            }
        } else {
            return res.status(200).json(helper.response(200, false, "Feed Not Found!"));
        }
    } catch (error) {
        return res.status(500).json(helper.response(500, false, "something went wrong!"));
    }
}

exports.tagFriendOnFeed = async (req, res) => {
    try {
        let payload = req.body;
        let feedId = payload.feedId;
        let feed = await feedSchema.findById(feedId);
        if (feed) {
            let tagFriend = {
                userId: payload.userId,
            }
            let updateFeed = await feedSchema.findByIdAndUpdate(feedId, { $push: { tagFriend: tagFriend } }, { new: true });
            if (updateFeed) {
                return res.status(200).json(helper.response(200, true, "Tag Friend Added Successfully!", { updateFeed: updateFeed }));
            } else {
                return res.status(200).json(helper.response(200, false, "Tag Friend Added Failed!"));
            }
        } else {
            return res.status(200).json(helper.response(200, false, "Feed Not Found!"));
        }
    } catch (error) {
        return res.status(500).json(helper.response(500, false, "something went wrong!"));
    }
}