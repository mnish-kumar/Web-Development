const mongoose = require('mongoose');


function connectToDatabase() {
    mongoose.connect(process.env.MODULE_URI)
    .then(() =>{
        console.log("Database connected successfully...");
    }).catch((err) => {
        console.log(err);
    })
}

module.exports = connectToDatabase;