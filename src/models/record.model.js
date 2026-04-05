const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Record = sequelize.define("Record", {

  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },

  amount: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },

  type: {
    type: DataTypes.ENUM("income", "expense"),
    allowNull: false
  },

  category: {
    type: DataTypes.STRING
  },

  date: {
    type: DataTypes.DATE
  },

  description: {
    type: DataTypes.TEXT
  }

});

module.exports = Record;