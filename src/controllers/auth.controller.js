const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../models/user.model");

exports.register = async (req, res) => {

  try {

    const { name, email, password } = req.body;

    const existingUser =
      await User.findOne({ where: { email } });

    if (existingUser)
      return res.status(400).json({
        message: "Email already exists"
      });

    const hashedPassword =
      await bcrypt.hash(password, 10);

    const user = await User.create({

      name,
      email,
      password: hashedPassword,
      role: "VIEWER"

    });

    res.status(201).json(user);

  } catch (err) {

    res.status(500).json({
      message: err.message
    });

  }

};

exports.login = async (req, res) => {

  try {

    const { email, password } = req.body;

    const user =
      await User.findOne({ where: { email } });

    if (!user)
      return res.status(400).json({
        message: "User not found"
      });

    const match =
      await bcrypt.compare(password, user.password);

    if (!match)
      return res.status(400).json({
        message: "Invalid password"
      });

    const token = jwt.sign(
      { id: user.id },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.json({
      token
    });

  } catch (err) {

    res.status(500).json({
      message: err.message
    });

  }

};