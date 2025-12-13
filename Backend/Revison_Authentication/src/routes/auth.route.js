const express = require('express');
const userModel = require('../models/user.models');
const router = express.Router();
const jwt =  require('jsonwebtoken');

/*
    POST/register -> req.body = {username, password}
    GET/user -> (Protected API) = req.cookies.token
    POST/login -> req.body = {username, password}
    GET/logout -> clears the token cookie
*/

router.post('/register',async (req, res) =>{
    const {username, password} = req.body;

    // User exist karta hai to--->
    const isUserAllReadyExist = await userModel.findOne({
        username,
    })

    if (isUserAllReadyExist){
        return res.status(409).json({
            message: "user already exist...",
        })
    }

    const user = await userModel.create({
        username, password
    });


    // create token
    const token = jwt.sign({id : user._id}, process.env.JWT_TOKEN);

    res.cookie("token", token);

    res.status(201).json({
        message: "User registered successfully...",
        user,
    })
})




router.get('/user', async (req, res) => {
    const token = req.cookies.token;
     
    if (!token){
        return res.status(401).json({
            message: "Unauthorized token not found..."
        })
    }


    try{
        const decode = jwt.verify(token, process.env.JWT_TOKEN);

        const user = await userModel.findOne({
            _id: decode.id,
        })

        return res.status(200).json({
            message: "user data fetch successfully...",
            user,
        })
    }catch(err) {
        res.status(401).json({
            message: "Unauthorized invalid token",
        })
    }
})



router.post('/login', async (req, res) => {
    const {username, password} = req.body;

    const user = await userModel.findOne({
        username,
    })

    if (!user) {
        return res.status(404).json({
            message: "User account not found !"
        })
    }

    const isPasswordValid = user.password == password;

    if (!isPasswordValid) {
        return res.status(404).json({
            message: "Inavlid Password !"
        })
    }

    const token = jwt.sign({id: user._id}, process.env.JWT_TOKEN);

    res.cookie('token', token, {
        expires: new Date(Date.now () + 1000 * 60 * 60 * 24 * 7), // 7 days
    })

    res.status(200).json({
        message: "Login successful...",
        user,
    })
})


router.get('/logout', (req, res) => {
    
    res.clearCookie('token');

    res.status(200).json({
        message: "Logout successful...",
    })
})


module.exports = router;