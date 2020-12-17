const path = require('path');

exports.uploadData = (req, res, next) => {
  if (req.file) {
    res.status(200).json({
      status: 'success',
      message: process.env.SUCCESS_MSG,
    });
  } else {
    res.status(404).json({
      status: 'failure',
      message: 'file upload failed',
    });
  }
};
exports.downloadData = (req, res, next) => {
  const filepath = '../uploads/';
  const { filename } = req.query;
  const name = `${filepath}${filename}`;
  const send = path.join(`${__dirname}`, `${name}`);
  if (res.status(200)) {
    res.download(send); // Set disposition and send it.
  } else if (!send) {
    res.json({
      status: process.env.ERROR_MSG,
    });
  }
};
