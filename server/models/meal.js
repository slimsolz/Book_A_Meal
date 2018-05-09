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
    Meal.hasMany(models.Order, {
      foreignKey: 'mealId',
      onDelete: 'CASCADE'
    });

    Meal.belongsToMany(models.Menu, {
      through: 'MealMenu',
      foreignKey: 'mealId',
      onDelete: 'CASCADE'
    });
  };

  return Meal;
  
};