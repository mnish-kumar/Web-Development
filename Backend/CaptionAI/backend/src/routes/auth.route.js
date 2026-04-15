const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');
const authMiddleware = require('../middlewares/auth.middleware');

/*
    POST /auth/register -> req.body = {username, password}
    GET /auth/user      -> (Protected API) = req.cookies.token
    POST /auth/login    -> req.body = {username, password}
    GET /auth/logout    -> clears the token cookie


    POST/api/post -> req.body = {image} , (Protected API) = req.cookies.token
*/

router.post('/register', authController.registerController);
router.post('/login', authController.loginController);

router.get('/me', authMiddleware, authController.meController);

router.post('/logout', authController.logoutController);

module.exports = router;