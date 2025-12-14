const userModel = require('../models/User.model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');



async function registerController(req, res) {
    // Registration logic goes here
    const {username, password} = req.body;

    const userExist = await userModel.findOne({username});

    if (userExist){
        return res.status(409).json({
            messgae: "username already exist..."
        })
    }

    const user = await userModel.create({
        username,
        password: await bcrypt.hash(password, 10),
    });

    const token = jwt.sign({id: user._id}, process.env.JWT_SECRET);
    res.cookie('token', token)

    res.status(201).json({
        message:"User created succesfully...",
        user
    })
}

async function userController(req, res) {
    const token = req.cookies.token;

    if (!token){
        return res.status(401).json({
            message: "Unauthorized token not valid."
        })
    }

    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        const user = await userModel.findOne({
            _id: decoded.id,
        })

        return res.status(201).json({
            message: "User fetch successfully...",
            user,
        })
    }
    catch(err) {
        return res.status().json({
            message: "Unauthorized invalid token",
        });
    }
}

async function loginController(req, res) {
    // Login logic goes here

    const {username, password} = req.body;

    const user = await userModel.findOne({
        username,
    })

    if (!user){
        return res.status(404).json({
            message: "User not found..."
        })
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch){
        return res.status(400).json({
            message: "Invalid credentials..."
        })
    }

    const token = jwt.sign({id: user._id}, process.env.JWT_SECRET);
    res.cookie('token', token)

    return res.status(200).json({
        message: "Login successful...",
        user,
    })

}


module.exports = {
    registerController,
    userController,
    loginController,
}