const server = require('express');
const songRoutes = require('./routes/songs.routes');
const cors = require('cors');

const app = server();
app.use(cors());
app.use(server.json());

app.use('/', songRoutes);

module.exports = app;