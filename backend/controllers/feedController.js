const feedSchema = require('../models/feedModel');
const userSchema = require('../models/userModel');
const helper = require('../helper/index');

exports.createFeed = async (req, res) => {
    try {
        let payload = req.body;
        let userId = req.user.userId;
        let feed = new feedSchema({
            title: payload.title,
            description: payload.description,
            feedType: payload.feedType,
            image: payload.image,
            video: payload.video,
            createdBy: userId,
        });
        let feedResult = await feed.save();
        if (feedResult) {
            return res.status(200).json(helper.response(200, true, "Feed Created Successfully!", { feedResult: feedResult }));
        } else {
            return res.status(400).json(helper.response(400, false, "Feed Created Failed!"));
        }
    } catch (error) {
        return res.status(500).json(helper.response(500, false, "something went wrong!"));
    }
}

exports.feedList = async (req, res) => {
    try {
        let userId = req.user.userId;
        let feedList = await feedSchema.find({ createdBy: userId }).populate('createdBy').populate('tagFriend.userId').populate('comment.userId').populate('comment.replyComment.userId').populate('reaction.userId').sort({ createdAt: -1 });
        if (feedList) {
            return res.status(200).json(helper.response(200, true, "Feed List!", { feedList: feedList }));
        } else {
            return res.status(400).json(helper.response(400, false, "Feed List Not Found!"));
        }
    } catch (error) {
        return res.status(500).json(helper.response(500, false, "something went wrong!"));
    }
}

exports.reactOnFeed = async (req, res) => {
    try {
        let payload = req.body;
        let feedId = payload.feedId;
        let reactionType = payload.reactionType;
        let userId = req.user.userId;
        let feed = await feedSchema.findById(feedId);
        if (feed) {
            let reaction = {
                userId: userId,
                reactionType: reactionType,
            }
            let updateFeed = await feedSchema.findByIdAndUpdate(feedId, { $push: { reaction: reaction } }, { new: true });
            if (updateFeed) {
                return res.status(200).json(helper.response(200, true, "Reaction Added Successfully!", { updateFeed: updateFeed }));
            } else {
                return res.status(400).json(helper.response(400, false, "Reaction Added Failed!"));
            }
        } else {
            return res.status(400).json(helper.response(400, false, "Feed Not Found!"));
        }
    } catch (error) {
        return res.status(500).json(helper.response(500, false, "something went wrong!"));
    }
}

exports.commentOnFeed = async (req, res) => {
    try {
        let payload = req.body;
        let feedId = payload.feedId;
        // let comment = payload.comment;
        let userId = req.user.userId;
        let feed = await feedSchema.findById(feedId);
        if (feed) {
            let comment = {
                userId: userId,
                comment: payload.comment,
            }
            let updateFeed = await feedSchema.findByIdAndUpdate(feedId, { $push: { comment: comment } }, { new: true });
            if (updateFeed) {
                return res.status(200).json(helper.response(200, true, "Comment Added Successfully!", { updateFeed: updateFeed }));
            } else {
                return res.status(400).json(helper.response(400, false, "Comment Added Failed!"));
            }
        } else {
            return res.status(400).json(helper.response(400, false, "Feed Not Found!"));
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
        let replyUserComment = payload.replyComment;
        let userId = req.user.userId;
        let feed = await feedSchema.findById(feedId);
        if (feed) {
            let updateFeed = await feedSchema.findOneAndUpdate({ _id: feedId, "comment._id": commentId }, { $push: { "comment.$.replyComment": { userId: userId, replyUserComment: replyUserComment } } }, { new: true });
            if (updateFeed) {
                return res.status(200).json(helper.response(200, true, "Reply Comment Added Successfully!", { updateFeed: updateFeed }));
            } else {
                return res.status(400).json(helper.response(400, false, "Reply Comment Added Failed!"));
            }
        } else {
            return res.status(400).json(helper.response(400, false, "Feed Not Found!"));
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
                return res.status(400).json(helper.response(400, false, "Tag Friend Added Failed!"));
            }
        } else {
            return res.status(400).json(helper.response(400, false, "Feed Not Found!"));
        }
    } catch (error) {
        return res.status(500).json(helper.response(500, false, "something went wrong!"));
    }
}