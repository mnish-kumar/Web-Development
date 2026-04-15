const userModel = require("../models/User.model");
const jwt = require("jsonwebtoken");

function authMiddleware(options = { required: true }) {
  return async function (req, res, next) {
    const headerValue = req.headers.authorization;
    const bearerToken =
      headerValue && headerValue.startsWith("Bearer ")
        ? headerValue.slice("Bearer ".length)
        : null;

    const cookieToken = req.cookies?.token;
    const token = bearerToken || cookieToken;

    // Case 1: Token missing
    if (!token) {
      if (options.required) {
        return res.status(401).json({
          message: "Unauthorized, please login.",
        });
      } else {
        req.user = null;
        return next();
      }
    }

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      const user = await userModel.findById(decoded.id);

      if (!user) {
        if (options.required) {
          return res.status(401).json({
            message: "User not found.",
          });
        } else {
          req.user = null;
          return next();
        }
      }

      req.user = user;
      return next();
    } catch (err) {
      if (options.required) {
        return res.status(401).json({
          message: "Invalid token.",
        });
      } else {
        req.user = null;
        return next();
      }
    }
  };
}

module.exports = authMiddleware;
