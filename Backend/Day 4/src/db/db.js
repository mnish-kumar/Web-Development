const mongoose = require('mongoose');
require('dotenv').config();

function connectToDB() {
  const url = process.env.MONGO_URL;
  if (!url) {
    console.error("MONGO_URL is not defined in .env");
    return;
  }

  mongoose.connect(url)
    .then(() => {
      console.log("Connected to DB");
    })
    .catch((err) => {
      console.error("Failed to connect to DB:", err.message);
    });
}

module.exports = connectToDB;