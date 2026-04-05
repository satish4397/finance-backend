const sequelize = require("../config/db");

const User = require("./user.model");
const Role = require("./role.model");
const Record = require("./record.model");

/* Relationships */

User.hasMany(Record, {
  foreignKey: "created_by"
});

Record.belongsTo(User, {
  foreignKey: "created_by"
});

/* Create tables */

sequelize.sync({
  alter: true
});

module.exports = {
  sequelize,
  User,
  Role,
  Record
};