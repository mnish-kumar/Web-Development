const mongoose = require('mongoose');

function connectToDB() {
    mongoose.connect('mongodb+srv://manishkrsmi_db_user:18j2OyocwhG08f83@cluster0.mvw3nbj.mongodb.net/cohort')
    .then(() => {
        console.log("Connect to DataBase...");
    })
}

module.exports = connectToDB;