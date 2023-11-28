const mongoose = require('mongoose');


const tagFriend = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const replyCommentSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    replyComment: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const commentSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    comment: {
        type: String,
    },
    replyComment: [replyCommentSchema],
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const reactionSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    reactionType: {
        type: String,
        enum: ["like", "love", "hah", "wow", "sad", "angry"]
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});


const feedSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    description: {
        type: String,
    },
    feedType: {
        type: String,
        enum: ["text", "image", "video"]
    },
    image: {
        type: String,
    },
    video: {
        type: String,
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    tagFriend: [tagFriend],
    comment: [commentSchema],
    reaction: [reactionSchema],
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Feed', feedSchema);