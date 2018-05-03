'use strict';
module.exports = (sequelize, DataTypes) => {
  var Caterer = sequelize.define('Caterer', {
    storeName: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    phoneNo: DataTypes.STRING,
    address: DataTypes.STRING,
    imagePath: DataTypes.STRING
  }, {});
  Caterer.associate = function(models) {
    // associations can be defined here
  };
  return Caterer;
};