require("dotenv").config();

const app = require("./src/app");

const db = require("./src/models");

/* Import seeder */

const seedAdmin =
  require("./seeders/admin.seeder");

const PORT =
  process.env.PORT || 5000;

const startServer =
  async () => {

    try {

      await db.sequelize.sync({
        alter: true
      });

      /* Run Seeder */

      await seedAdmin();

      app.listen(
        PORT,
        () => {

          console.log(
            `Server running on port ${PORT}`
          );

        }
      );

    } catch (error) {

      console.error(
        "Server error:",
        error
      );

    }

  };

startServer();