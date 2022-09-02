const express = require("express");
const { body } = require("express-validator");
const AuthRoute = express.Router();
const { register, login } = require("../controllers/authController");

//routes
AuthRoute.post(
  "/register",
  [
    body("name").trim().isLength({ min: 1 }),
    body("email").isEmail(),
    body("password").trim().isLength({ min: 6 }),
  ],
  register
);
AuthRoute.post(
  "/login",
  [body("email").isEmail(), body("password").trim().isLength({ min: 6 })],
  login
);

module.exports = AuthRoute;
