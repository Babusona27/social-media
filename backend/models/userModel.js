const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        unique: true
    },
    dob: {
        type: Date,
        required: true
    },
    gender: {
        type: String,
        enum: ["Male", "Female"]
    },
    latitude: {
        type: String,
    },
    longitude: {
        type: String,
    },
    about_me: {
        type: String,
    },
    university_name: {
        type: String,
    },
    from: {
        type: String,
    },
    to: {
        type: String,
    },
    education_description: {
        type: String,
    },
    company_name: {
        type: String,
    },
    work_description: {
        type: String,
    },
    designation: {
        type: String,
    },
    company_city: {
        type: String,
    },
    hobbies: {
        type: String,
    },
    follow_me: {
        type: Boolean,
        enum: [true, false],
        default: true
    },
    send_notification: {
        type: Boolean,
        enum: [true, false],
        default: true
    },
    enable_tagging: {
        type: Boolean,
        enum: [true, false],
        default: true
    },
}, {
    createdAt: Date.now(),
});

module.exports = mongoose.model('User', userSchema);
