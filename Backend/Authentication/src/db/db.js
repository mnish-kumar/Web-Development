const mongoose = require('mongoose');



function connectToDatabase() {
    mongoose.connect(process.env.MONGODB_URL)
    .then(() => {
        console.log("Connected to the database successfully...");
    })
    .catch((error) => {
        console.error("Error connecting to the database:", error);
    });
}

module.exports =  connectToDatabase;