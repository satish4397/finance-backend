const Record = require(
  "../models/record.model"
);

exports.createRecord = async (
  data,
  userId
) => {

  return await Record.create({

    ...data,
    created_by: userId

  });

};

exports.getRecords = async (
  filters
) => {

  return await Record.findAll({
    where: filters
  });

};