module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name:{
     type: DataTypes.STRING,
     allowNull: false
   },
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email:{
     type: DataTypes.STRING,
     allowNull: false,
     unique: true
    },
    password:{
     type: DataTypes.STRING,
     allowNull: false
    },
    role:{
     type: DataTypes.STRING,
     allowNull: false
    }
  });

  User.associate = (models) => {
    // associations can be defined here
    User.hasMany(models.Meal, {
      foreginKey: 'userId',
      onDelete: 'CASCADE'
    });

    User.hasMany(models.Menu, {
      foreginKey: 'userId',
      onDelete: 'CASCADE'
    });

    User.hasMany(models.Order, {
      foreginKey: 'userId',
      onDelete: 'CASCADE'
    });
  };
  return User;
};