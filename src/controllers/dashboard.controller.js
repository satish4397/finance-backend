const Record = require("../models/record.model");
const { Sequelize } = require("sequelize");

exports.getSummary = async (req, res) => {

  try {

    const income =
      await Record.sum("amount", {
        where: { type: "income" }
      });

    const expense =
      await Record.sum("amount", {
        where: { type: "expense" }
      });

    res.json({

      totalIncome: income || 0,
      totalExpense: expense || 0,
      netBalance:
        (income || 0) - (expense || 0)

    });

  } catch (err) {

    res.status(500).json({
      message: err.message
    });

  }

};