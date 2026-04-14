const userModel = require('../models/User.model');
const jwt = require('jsonwebtoken');


async function authMiddleware(req, res, next) {
    const headerValue = req.headers.authorization;
    const bearerToken = headerValue && headerValue.startsWith('Bearer ')
        ? headerValue.slice('Bearer '.length)
        : null;

    const cookieToken = req.cookies?.token;
    const token = bearerToken || cookieToken;

    if (!token) {
        return res.status(401).json({
            message: 'Unauthorized token, please login.',
        })
    }

    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        const user = await userModel.findOne({
            _id: decoded.id,
        });

        if (!user) {
            return res.status(401).json({
                message: 'Unauthorized token, user not found.',
            })
        }

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