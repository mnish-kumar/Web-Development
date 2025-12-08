require('dotenv').config();
const connectToDatabase = require("./src/db/db");
const app = require("./src/app");


connectToDatabase();

app.listen(3000, () => {
    console.log("Server running on port 3000...");
})