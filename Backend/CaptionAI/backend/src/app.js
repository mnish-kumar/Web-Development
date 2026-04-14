const express = require('express');
const Authrouter = require('./routes/auth.route');
const cookieParser = require('cookie-parser');
const postRoute = require('./routes/post.route');
const cors = require('cors');

const app = express();
app.use(cors({
    origin: 'http://localhost:5173',
}));

app.use(express.json());
app.use(cookieParser());

// Authentication routes
app.use('/api/auth', Authrouter);

// Post routes
app.use('/api/posts', postRoute);

module.exports = app;