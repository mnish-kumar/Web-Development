const mongoose = require('mongoose');

function connectToDatabse() {
    mongoose.connect(process.env.MONGODB_URL)
    .then(() =>{
        console.log("Connected to Database");
    })
    .catch((err) => {
        console.log("Error connecting to Database:", err);
    })
}

module.exports = connectToDatabse;