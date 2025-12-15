const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    imageUrl: {
        type: String,
        required: true,
    },
    caption: {
        type: String,
        required: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
}, {timestamps: true}); 


const postModel = mongoose.model('Post', postSchema);


module.exports = postModel;