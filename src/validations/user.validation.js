const Joi = require("joi");

exports.userSchema =
  Joi.object({

    name:
      Joi.string().required(),

    email:
      Joi.string().email(),

    role:
      Joi.string().valid(
        "ADMIN",
        "ANALYST",
        "VIEWER"
      )

  });

  exports.roleSchema =
  Joi.object({

    role:
      Joi.string()
        .valid(
          "ADMIN",
          "ANALYST",
          "VIEWER"
        )
        .required()

  });