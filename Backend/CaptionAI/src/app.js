const express = require('express');
const Authrouter = require('./routes/auth.route');
const cookieParser = require('cookie-parser');
const postRoute = require('./routes/post.route');

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use('/api/auth', Authrouter);
app.use('/api/posts', postRoute);

module.exports = app;