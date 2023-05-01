const connection = require('../config/dbConnection');
const taskM = require('../model/task')

const clearQ = () => {
  connection()
  return taskM.deleteMany({})
}

module.exports = clearQ;