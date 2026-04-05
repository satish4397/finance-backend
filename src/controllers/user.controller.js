const userService = require("../services/user.service");

exports.createUser = async (req, res, next) => {

  try {

    const user =
      await userService.createUser(req.body);

    res.status(201).json(user);

  } catch (err) {

    next(err);

  }

};

exports.getUsers = async (req, res, next) => {

  try {

    const users =
      await userService.getUsers();

    res.json(users);

  } catch (err) {

    next(err);

  }

};

exports.updateUser = async (req, res, next) => {

  try {

    const user =
      await userService.updateUser(
        req.params.id,
        req.body
      );

    res.json(user);

  } catch (err) {

    next(err);

  }

};

exports.changeStatus = async (req, res, next) => {

  try {

    const user =
      await userService.changeStatus(
        req.params.id,
        req.body.status
      );

    res.json(user);

  } catch (err) {

    next(err);

  }

};