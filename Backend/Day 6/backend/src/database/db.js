const mongoose = require('mongoose');

function connectToDB () {
    mongoose.connect(process.env.MONGODB_URL)
    .then(() => {
        console.log("Connected to DataBase...");
    }).catch((err) => {
        console.log("Error connecting to DataBase:", err);
    });
}

module.exports = connectToDB;