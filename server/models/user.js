const Sequelize = require('sequelize');

const sequelize = require('./index.js');

const User = sequelize.define('userInfos', {
  id: { type: Sequelize.INTEGER, aotoIncrement: true, primaryKey: true, unique: true },
  username: { type: Sequelize.STRING },
  age: { type: Sequelize.INTEGER },
  address: { type: Sequelize.STRING },
  isDelete: { type: Sequelize.INTEGER, allowNull: true },
});

module.exports = User;
