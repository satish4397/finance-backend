const Record = require("../models/record.model");
const { Op } = require("sequelize");

exports.createRecord = async (req, res) => {

  try {

    const record = await Record.create({

      ...req.body,
      created_by: req.user.id

    });

    res.status(201).json(record);

  } catch (err) {

    res.status(500).json({
      message: err.message
    });

  }

};

exports.getRecords = async (req, res) => {

  try {

    const { type, category, startDate, endDate } =
      req.query;

    let where = {};

    if (type)
      where.type = type;

    if (category)
      where.category = category;

    if (startDate && endDate)
      where.date = {
        [Op.between]: [startDate, endDate]
      };

    const records =
      await Record.findAll({ where });

    res.json(records);

  } catch (err) {

    res.status(500).json({
      message: err.message
    });

  }

};

exports.updateRecord = async (req, res) => {

  try {

    const record =
      await Record.findByPk(req.params.id);

    if (!record)
      return res.status(404).json({
        message: "Record not found"
      });

    await record.update(req.body);

    res.json(record);

  } catch (err) {

    res.status(500).json({
      message: err.message
    });

  }

};

exports.deleteRecord = async (req, res) => {

  try {

    const record =
      await Record.findByPk(req.params.id);

    if (!record)
      return res.status(404).json({
        message: "Record not found"
      });

    await record.destroy();

    res.json({
      message: "Record deleted"
    });

  } catch (err) {

    res.status(500).json({
      message: err.message
    });

  }

};