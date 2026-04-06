const bcrypt = require("bcrypt");
const { User } = require("../src/models");

const seedAdmin = async () => {

  try {

    const existingAdmin =
      await User.findOne({
        where: {
          email: "admin@gmail.com"
        }
      });

    if (existingAdmin) {

      console.log("Admin already exists");
      return;

    }

    const hashedPassword =
      await bcrypt.hash(
        "123456",
        10
      );

    await User.create({

      name: "System Admin",

      email: "admin@gmail.com",

      password: hashedPassword,

      role: "ADMIN",

      status: true

    });

    console.log(
      "Default admin created successfully"
    );

  } catch (error) {

    console.error(
      "Seeder error:",
      error.message
    );

  }

};

module.exports = seedAdmin;