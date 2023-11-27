const mongoose = require('mongoose');

const userFriendSchema = new mongoose.Schema({
    user_id_1: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    user_id_2: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    status: {
        type: String,
        enum: ["pending", "accepted", "rejected"],
        default: "pending"
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});
module.exports = mongoose.model('UserFriend', userFriendSchema);