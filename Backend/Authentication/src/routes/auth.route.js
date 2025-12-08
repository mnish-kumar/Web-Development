const express = require('express');
const router = express.Router();
const userModel = require('../models/user.model');


/*
    # POST /registration
    # POST /login
    # GET /user
    # GET /logout
*/

router.post('/register', async (req, res) => {
    // Registration logic here
    const {username, password} = req.body;

    const newUser = await userModel.create(
        { username, password }
    );
    
    res.status(201).json({
        message: "User registered successfully",
        newUser,
    })
})


router.post('/login', async (req, res) =>{
    // Login logic here
    const { username, password } = req.body;

    const isUserExists = await userModel.findOne({ 
        username : username, 
        // password : password,
    });

    if(!isUserExists) {
        return res.status(401).json({
            message: "User not found / Invalid credentials"
        });
    }


    // req.nody se jo password aaya hai wo database ke username ke password se match hai ki nahi
    const isPasswordMatch = password === isUserExists.password;
    if (!isPasswordMatch) {
        return res.status(401).json({
            message: "Invalid password..."
        });
    }

    res.status(200).json({
        message: "Login successful...",
    })
});


module.exports = router;