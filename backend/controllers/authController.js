const asynchandler = require("express-async-handler");
const { validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const JWT = require("jsonwebtoken");
const User = require("../modules/User");
const secret_Key = process.env.SECRET_KEY;

exports.register = asynchandler(async (req, res) => {
  const error = validationResult(req);
  const { name, email, password } = req.body;
  //error checking
  if (!error.isEmpty()) {
    res.status(400);
    throw new Error("fill all fields correctly");
  }

  //exiting user
  const existingUser = User.findOne({ email });
  if (existingUser) {
    res.status(400);
    throw new Error("already existing user");
  }

  // secure password
  const salt = await bcrypt.genSalt(10);
  const hashpassword = bcrypt.hashSync(password, salt);
  //create user
  const registerUser = await User.create({
    name,
    email,
    password: hashpassword,
  });
  res.status(200).json({
    status: "success",
    message: `register user ${registerUser._id}`,
    token: generateToken(registerUser._id),
  });
});

exports.login = asynchandler(async (req, res) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    res.status(400);
    throw new Error("invalid cendentails");
  }
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user && (await bcrypt.compare(password, user.password))) {
    res.json({
      _id: user._id,
      name: user.name,
      token: generateToken(user._id),
    });
  }
});

const generateToken = (_id) => {
  return JWT.sign({ _id }, secret_Key, { expiresIn: "15d" });
};
