const Record = require(
  "../models/record.model"
);

exports.getSummary = async () => {

  const income =
    await Record.sum(
      "amount",
      {
        where: { type: "income" }
      }
    );

  const expense =
    await Record.sum(
      "amount",
      {
        where: { type: "expense" }
      }
    );

  return {

    totalIncome: income || 0,
    totalExpense: expense || 0,
    netBalance:
      (income || 0) -
      (expense || 0)

  };

};