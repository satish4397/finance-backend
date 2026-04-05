const bcrypt = require("bcrypt");
const User = require("../models/user.model");
const generateToken = require("../config/jwt");

exports.register = async (data) => {

  const { name, email, password } = data;

  const existingUser =
    await User.findOne({
      where: { email }
    });

  if (existingUser)
    throw new Error("Email already exists");

  const hashedPassword =
    await bcrypt.hash(password, 10);

  const user =
    await User.create({

      name,
      email,
      password: hashedPassword

    });

  return user;

};

exports.login = async (data) => {

  const { email, password } = data;

  const user =
    await User.findOne({
      where: { email }
    });

  if (!user)
    throw new Error("User not found");

  const match =
    await bcrypt.compare(
      password,
      user.password
    );

  if (!match)
    throw new Error("Invalid password");

  const token =
    generateToken(user);

  return {
    token
  };

};