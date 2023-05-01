const clearQ = require('../database/query/clear')

const clear = (req, res) => {
  clearQ()
  .then((data) => {
    if (data.acknowledged) {
      res.status(200).json({
        error: false,
        message: 'successfully',
      });
    }else{
      throw new Error((error))
    }
  })
  .catch((error) => {
    console.log(error);
    res.status(500).json({
      error:true,
      message: 'internal server error',
    });
  })
}

module.exports = clear;
