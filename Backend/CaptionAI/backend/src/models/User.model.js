const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        unique: true,
        required: true,
        index: true,
    },
    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 20,
    },
    email: {
        type: String,
        unique: true,
        required: true,
        match: [/^\S+@\S+\.\S+$/, "Please use a valid email"],
        lowercase: true,
        index: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
    }
})


const userModel = mongoose.model('user', userSchema);

module.exports = userModel;