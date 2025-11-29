const express = require('express');

const app = express() // Server Craete ho jata hai iss line pe

app.get ('/Home', (req, res) => {
    res.send("Welcome to the Home Page");
})

app.get ('/about', (req, res) => {
    res.send("Welcome to the About Page");
})

app.listen(3000, () =>{
    console.log("Server is running on port 3000");
})