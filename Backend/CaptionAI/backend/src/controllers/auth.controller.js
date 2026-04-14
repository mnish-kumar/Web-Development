const userModel = require('../models/User.model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');



async function registerController(req, res) {
    // Registration logic goes here
    const {username, password} = req.body;

    if (!username || !password) {
        return res.status(400).json({
            message: 'username and password are required.'
        })
    }

    if (!process.env.JWT_SECRET) {
        return res.status(500).json({
            message: 'Server misconfigured: JWT_SECRET is missing.'
        })
    }

    const userExist = await userModel.findOne({username});

    if (userExist){
        return res.status(409).json({
            message: "username already exist..."
        })
    }

    const user = await userModel.create({
        username,
        password: await bcrypt.hash(password, 10),
    });

    const safeUser = {
        _id: user._id,
        username: user.username,
    }

    const token = jwt.sign({id: user._id}, process.env.JWT_SECRET);
    res.cookie('token', token, {
        httpOnly: true,
        sameSite: 'lax',
    })

    res.status(201).json({
        message:"User created succesfully...",
        token,
        user: safeUser,
    })
}


async function loginController(req, res) {
    // Login logic goes here
    const {username, password} = req.body;

    if (!username || !password) {
        return res.status(400).json({
            message: 'username and password are required.'
        })
    }

    if (!process.env.JWT_SECRET) {
        return res.status(500).json({
            message: 'Server misconfigured: JWT_SECRET is missing.'
        })
    }

    const user = await userModel.findOne({
        username,
    });

    if (!user){
        return res.status(404).json({
            message: "User not found..."
        })
    }

    if (!user.password) {
        return res.status(400).json({
            message: 'User has no password set. Please register again.'
        })
    }

    const passwordMatch = await bcrypt.compare(String(password), String(user.password));

    if (!passwordMatch){
        return res.status(400).json({
            message: "Invalid credentials..."
        })
    }

    const token = jwt.sign({id: user._id}, process.env.JWT_SECRET);
    res.cookie('token', token, {
        httpOnly: true,
        sameSite: 'lax',
    })

    const safeUser = {
        _id: user._id,
        username: user.username,
    }

    return res.status(200).json({
        message: "Login successful...",
        token,
        user: safeUser,
    })

}


module.exports = {
    registerController,
    loginController,
}