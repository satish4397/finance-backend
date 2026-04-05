const User = require("../models/user.model");

exports.createUser = async (data) => {

  const user =
    await User.create(data);

  return user;

};

exports.getUsers = async () => {

  return await User.findAll();

};

exports.updateUser = async (id, data) => {

  const user =
    await User.findByPk(id);

  if (!user)
    throw new Error("User not found");

  await user.update(data);

  return user;

};

exports.changeStatus = async (
  id,
  status
) => {

  const user =
    await User.findByPk(id);

  if (!user)
    throw new Error("User not found");

  user.status = status;

  await user.save();

  return user;

};