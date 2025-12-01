const mongoose = require('mongoose');


// Server databse se connect kaise hoga, wo tum db.js file me likhoge

function connectToDB(){
    mongoose.connect("mongodb+srv://manishkrsmi_db_user:18j2OyocwhG08f83@cluster0.mvw3nbj.mongodb.net/cohort")
    .then(() => {
        console.log("Connected to DB");
    })
}

module.exports = connectToDB;