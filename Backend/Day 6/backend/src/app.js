const server = require('express');
const songRoute = require('./routes/songs.routes');

const app = server();
app.use(server.json());



app.use('/', songRoute);

module.exports = app;