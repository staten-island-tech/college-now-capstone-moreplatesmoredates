const mongoose = require('mongoose');
const slugify = require('slugify');

//todo: hash password, somehow add more of the features to track workouts

//Schema for user accounts
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        require: 'Please enter a username'
    },
    //not secure
    password: {
        type: String,
        required: true,
        require: 'Please enter a password'
    },
    email: {
        type: String,
        required: true,
        unique: true,
        require: 'Please enter an email'
    }
});

module.exports = mongoose.model('user', userSchema);