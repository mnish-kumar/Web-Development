const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const path = require('path');

const Authrouter = require('./routes/auth.route');
const postRoute = require('./routes/post.route');

const app = express();

app.use(
    cors({
        origin: 'http://localhost:5173',
        credentials: true,
    })
);

app.use(express.json());
app.use(cookieParser());

// Silence Chrome DevTools probe
app.get('/.well-known/appspecific/com.chrome.devtools.json', (req, res) => {
    res.status(204).end();
});

// ✅ API routes first
app.use('/api/auth', Authrouter);
app.use('/api/posts', postRoute);

// ✅ Serve static frontend files
const publicDir = path.join(__dirname, '..', 'public');
app.use(express.static(publicDir));

// ✅ Catch-all for React Router (Express 5 compatible)
app.get('/{*path}', (req, res) => {
    res.sendFile(path.join(publicDir, 'index.html'));
});

module.exports = app;
