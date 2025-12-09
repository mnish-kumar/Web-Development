const express = require('express');
const Authrouter = require('./routes/auth.route');
const cookisParser = require('cookie-parser')


const app = express();
app.use(express.json());
app.use(cookisParser());

/**
    POST /auth/register
    POST /auth/login
    GET /auth/user
    GET /auth/logout
 */

app.use('/auth', Authrouter);


module.exports = app;