const usermodel = require("../models/user.models");
const jwt = require("jsonwebtoken");


/**
 *  - user registration controller
 * - post request to /api/auth/register
 **/

async function register(req, res) {
  const { name, email, password } = req.body;

  const isexist = await usermodel.findOne({ email: email });

  if (isexist) {
    return res
      .status(422)
      .json({ message: "User already exists", status: "failed" });
  }

  const user = await usermodel.create({
    name,
    email,
    password,
  })
  const token = jwt.sign({userId: user._id}, process.env.JWT_SECRET, {expiresIn: "3d"})
  res.cookie("token", token) 
  res.status(201).json({ 
    user: {
    _id: user._id,
    email: user.email,
    name: user.name,
},token, message: "User registered successfully", status: "success" })
}
 
module.exports = { register };
