const mongoose = require('mongoose');


// title: String & contenet:String
const noteSchema = new mongoose.Schema({
    title:String,
    content:String,
})


// note => collection ka naam
const noteModel = mongoose.model('note', noteSchema); //model create hau yaha

module.exports = noteModel;