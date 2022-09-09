const jwt = require("jsonwebtoken");
const asynchandler = require("express-async-handler");
const user = require("../modules/User");

const protect = asynchandler(async (req, res, next) => {
  let token;

  if (
    req.body.headers.Authorization &&
    req.body.headers.Authorization.startsWith("Bearer")
  ) {
    try {
      // Get token from header
      token = req.body.headers.Authorization.split(" ")[1];

      // Verify token
      const decoded = jwt.verify(token, process.env.SECRET_KEY);

      // Get user from the token
      req.user = await user.findById(decoded._id).select("-password");

      next();
    } catch (error) {
      res.status(401);
      throw new Error("Not authorized");
    }
  }

  if (!token) {
    res.status(401);
    throw new Error("Not authorized, no token");
  }
});

module.exports = { protect };
