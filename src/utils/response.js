exports.success = (
  res,
  data,
  message = "Success"
) => {

  res.json({

    success: true,
    message,
    data

  });

};

exports.error = (
  res,
  message
) => {

  res.status(500).json({

    success: false,
    message

  });

};