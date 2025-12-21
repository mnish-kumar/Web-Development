const express = require('express');
const router = express.Router();
const { authUserMiddleware } = require('../middlewares/auth.middleware');
const { createChat } = require('../controller/chat.controller');


/* POST/api/chat */
router.post('/', authUserMiddleware , createChat);

module.exports = router;