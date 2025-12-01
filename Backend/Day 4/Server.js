/*
    Notes API creates a simple server.

    POST/ notes / - Create a new note
    GET/ notes / - Get all notes
    PUT/ notes/:id - Update a specific note by ID
    DELETE/ notes/:id - Delete a specific note by ID
*/


// server database se connect server.js file me


const express = require('express');
const connectToDB = require('./src/db/db')

connectToDB();  //---> function call of server to DB connect


const app = express();   // Here, create the server


//  ----Middleware----
app.use(express.json());



app.get ('/', (req, res) => {
    res.send("Welcome to the Home Page");
})

app.post('/notes', (req, res) => {
    const {title, content} = req.body;
    console.log(title, content);
})


app.listen(3000, () => {
    console.log("Server is running on PORT 3000....");
})