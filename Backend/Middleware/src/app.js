const express = require('express');
const router = require('./index.route');

const app = express();


// ---Middleware of app between router---
app.use((req, res, next) => {
    console.log("Middleware of app between router");
    next();
})

app.use('/', router);



module.exports = app;