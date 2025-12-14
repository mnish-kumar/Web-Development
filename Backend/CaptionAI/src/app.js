const express = require('express');
const Authrouter = require('./routes/auth.route');
const coookieParser = require('cookie-parser');

const app = express();

app.use(express.json());
app.use(coookieParser());
app.use('/api/auth', Authrouter);

module.exports = app;