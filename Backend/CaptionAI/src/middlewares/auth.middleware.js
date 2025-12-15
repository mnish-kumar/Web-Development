const userModel = require('../models/User.model');
const jwt = require('jsonwebtoken');


async function authMiddleware(req, res, next) {
    const token = req.cookies.token;

    if (!token){
        return res.status(401).json({
            message: "Unauthorized token, please login."
        })
    }

    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        const user = await userModel.findOne({
            _id: decoded.id,
        });

        req.user = user;
        next();
    }
    catch(err) {
        return res.status(401).json({
            message: "Unauthorized token, please login.",
        });
    }
}

module.exports = authMiddleware;