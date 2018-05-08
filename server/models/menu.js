module.exports = (sequelize, DataTypes) => {
  const Menu = sequelize.define('Menu', {
    available: {
    	type: DataTypes.BOOLEAN,
    	allowNull: false
    },
    
  });

  Menu.associate = (models) => {
    // associations can be defined here
    Menu.belongsTo(models.User, {
    	foreignKey: 'userId',
    	onDelete: 'CASCADE'
    });

    Menu.belongsToMany(models.Meal, {
      through: 'MealMenu',
      foreignKey: 'menuId',
      onDelete: 'CASCADE'
    });
  };

  return Menu;

};