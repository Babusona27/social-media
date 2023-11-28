const mongoose = require('mongoose');

const userHobbiesSchema = new mongoose.Schema({
    name: {
        type: String
    },
}, {
    createdAt: Date.now(),
});
module.exports = mongoose.model('Hobbies', userHobbiesSchema);