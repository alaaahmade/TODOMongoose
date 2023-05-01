const connection = require('../config/dbConnection');
const taskM = require('../model/task');

const addTaskQ = (object) => {
  connection()
      const todo = new taskM(object)
      return todo.save()
}

module.exports = addTaskQ;
