/*
    Notes API creates a simple server.

    POST/ notes / - Create a new note
    GET/ notes / - Get all notes
    PUT/ notes/:id - Update a specific note by ID
    DELETE/ notes/:id - Delete a specific note by ID
*/


const express = require('express');
require('dotenv').config();
const connectToDB = require('./src/db/db');

connectToDB();

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send("Welcome to the Home Page");
});

app.post('/notes', (req, res) => {
  const { title, content } = req.body;
  console.log(title, content);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}....`);
});