const sequelize = require("../config/db");

const User = require("./user.model");
const Record = require("./record.model");

User.hasMany(Record, {
  foreignKey: "created_by"
});

Record.belongsTo(User, {
  foreignKey: "created_by"
});

sequelize.sync();

module.exports = {
  sequelize,
  User,
  Record
};