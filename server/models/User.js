// server/models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    shieldExpiry: {
        type: Date
    }
});

module.exports = mongoose.model('User', userSchema);
 
