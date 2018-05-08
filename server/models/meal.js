module.exports = (sequelize, DataTypes) => {
  const Meal = sequelize.define('Meal', {
    mealName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    imgpath: {
      type: DataTypes.STRING,
      allowNull: false
    },
    available: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  });

  Meal.associate = (models) => {
    // associations can be defined here
    Meal.belongsTo(models.User, {
      foreginKey: 'userId',
      onDelete: 'CASCADE'
    });

    Meal.belongsTo(models.Order, {
      foreginKey: 'orderId',
      onDelete: 'CASCADE'
    });

    Meal.belongsToMany(models.Menu, {
      through: 'MealMenu',
      foreginKey: 'mealId',
      onDelete: 'CASCADE'
    });
  };

  return Meal;
  
};