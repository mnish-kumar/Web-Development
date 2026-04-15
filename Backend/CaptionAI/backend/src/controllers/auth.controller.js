const userModel = require('../models/User.model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');



async function registerController(req, res) {
    // Registration logic goes here
    const { username, name, email, password } = req.body;

    if (!username || !name || !email || !password) {
        return res.status(400).json({
            message: 'All fields are required.'
        })
    }

    if (!process.env.JWT_SECRET) {
        return res.status(500).json({
            message: 'Server misconfigured: JWT_SECRET is missing.'
        })
    }

    const userExist = await userModel.findOne({ 
        $or: [
            { username },
            { email },
        ]
     });

    if (userExist){
        return res.status(409).json({
            message: "username or email already exist..."
        })
    }

    const genSalt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(String(password), genSalt);

    const user = await userModel.create({
        username,
        name,
        email,
        password: hashedPassword,
    });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    res.cookie('token', token, {
        httpOnly: true,
        secure: true,
    })

    res.status(201).json({
        message:"User created succesfully...",
        user,
    })
}

async function loginController(req, res) {
    // Login logic goes here
    const { username, email, password } = req.body;

    if (!username || !password || !email) {
        return res.status(400).json({
            message: 'username, email, and password are required.'
        })
    }

    if (!process.env.JWT_SECRET) {
        return res.status(500).json({
            message: 'Server misconfigured: JWT_SECRET is missing.'
        })
    }

    const user = await userModel.findOne({
        $or: [
            { username },
            { email },
        ]
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

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    res.cookie('token', token, {
        httpOnly: true,
        secure: true,
    })

    return res.status(200).json({
        message: "Login successful...",
        user,
    })

}

async function meController(req, res) {
    // Get current user logic goes here
    try {
        const user = req.user;

        if (!user) {
            return res.status(404).json({
                message: 'User not found.'
            })
        }

        res.status(200).json({
            message: 'User data fetched successfully.',
            currentUser: user,
        })
    }catch (error) {
        console.error('Error in meController:', error);
        res.status(500).json({
            message: 'An error occurred while fetching user data.'
        });
    }
}

async function logoutController(req, res) {
    const token = req.cookies.token;

    if (!token) {
        return res.status(400).json({
            message: 'No token provided.'
        })
    }

    res.clearCookie('token', {
        httpOnly: true,
        secure: true,
    });

    return res.status(200).json({
        message: 'Logout successful.'
    })
}


module.exports = {
    registerController,
    loginController,
    meController,
    logoutController,
}