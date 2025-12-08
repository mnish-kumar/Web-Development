const express = require('express');
const Authrouter = require('./routes/auth.route');


const app = express();
app.use(express.json());

/**
    POST /auth/register
    POST /auth/login
    GET /auth/user
    GET /auth/logout
 */

app.use('/auth', Authrouter);


module.exports = app;