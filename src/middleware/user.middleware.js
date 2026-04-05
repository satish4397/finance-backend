const User = require("../models/user.model");

/**
 * Check if user exists
 */
exports.checkUserExists = async (
  req,
  res,
  next
) => {

  try {

    const userId =
      req.params.id ||
      req.body.userId;

    const user =
      await User.findByPk(userId);

    if (!user) {

      return res.status(404).json({
        success: false,
        message: "User not found"
      });

    }

    req.targetUser = user;

    next();

  } catch (error) {

    next(error);

  }

};

/**
 * Check if user is active
 */
exports.checkUserActive = (
  req,
  res,
  next
) => {

  try {

    if (!req.user.status) {

      return res.status(403).json({

        success: false,
        message:
          "User account is inactive"

      });

    }

    next();

  } catch (error) {

    next(error);

  }

};

/**
 * Check ownership
 * Example: Only creator can modify record
 */
exports.checkOwnership = (
  model
) => {

  return async (
    req,
    res,
    next
  ) => {

    try {

      const resource =
        await model.findByPk(
          req.params.id
        );

      if (!resource) {

        return res.status(404).json({
          message:
            "Resource not found"
        });

      }

      if (
        resource.created_by !==
        req.user.id
      ) {

        return res.status(403).json({
          message:
            "You do not own this resource"
        });

      }

      req.resource = resource;

      next();

    } catch (error) {

      next(error);

    }

  };

};