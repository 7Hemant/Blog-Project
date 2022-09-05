const asynchandler = require("express-async-handler");
const { validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const JWT = require("jsonwebtoken");
const user = require("../modules/User");
const secret_Key = process.env.SECRET_KEY;

exports.register = asynchandler(async (req, res) => {
  const error = validationResult(req);
  const { name, email, password } = req.body;
  //error checking
  if (!error.isEmpty()) {
    res.status(400);
    throw new Error("fill all fields correctly");
  }

  // secure password
  const salt = await bcrypt.genSalt(10);
  const hashpassword = bcrypt.hashSync(password, salt);
  //create user
  const registerUser = await user.create({
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
  console.log("login");
  const User = await user.findOne({ email });

  if (User && (await bcrypt.compare(password, User.password))) {
    res.json({
      _id: User._id,
      name: User.name,
      token: generateToken(User._id),
    });
  }
});

const generateToken = (_id) => {
  return JWT.sign({ _id }, secret_Key, { expiresIn: "15d" });
};
