const sequelize = require('../config/database');
const Todo = require('./todo');

// Export models and sequelize instance
module.exports = {
  sequelize,
  Todo
}; 