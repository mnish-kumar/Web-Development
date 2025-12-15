const express = require('express');
const router = express.Router();
const {
    registerController , 
    loginController
} = require('../controllers/auth.controller');

/*
    POST /auth/register -> req.body = {username, password}
    GET /auth/user      -> (Protected API) = req.cookies.token
    POST /auth/login    -> req.body = {username, password}
    GET /auth/logout    -> clears the token cookie


    POST/api/post -> req.body = {imageUrl} , (Protected API) = req.cookies.token
*/

router.post('/register', registerController)
router.post('/login', loginController);

module.exports = router;