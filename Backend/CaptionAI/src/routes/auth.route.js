const express = require('express');
const router = express.Router();
const {
    registerController , 
    userController, 
    loginController
} = require('../controllers/auth.controller');

/*
    POST /auth/register -> req.body = {username, password}
    GET /auth/user      -> (Protected API) = req.cookies.token
    POST /auth/login    -> req.body = {username, password}
    GET /auth/logout    -> clears the token cookie
*/

router.post('/register', registerController)
router.get('/user', userController);
router.post('/login', loginController);

module.exports = router;