const addTaskQ = require('../database/query/addTask');

const addTask = (req, res, next) => {
  const task = req.body
  console.log(task);
  if(task.task) {
    addTaskQ(task)
    .then((result) => {
      res.status(201).json({
        error: false,
        data: result 
      });
    }).catch((error) => {
      console.log(error);
      res.status(500).json({
        error: true,
        message: 'internal server error'
      });
    })
  }else {
    res.status(500).json({
      error: true,
      message: 'cant add empty string'
    });
  }
  
}

module.exports = addTask;
