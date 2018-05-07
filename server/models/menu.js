module.exports = (sequelize, DataTypes) => {
  const Menu = sequelize.define('Menu', {
    available: {
    	type: DataTypes.Boolean,
    	allowNull: false
    },
    
  });

  Menu.associate = (models) => {
    // associations can be defined here
    Menu.belongsTo(models.Caterer, {
    	foreignKey: 'catererId',
    	onDelete: 'CASCADE'
    });

    Menu.belongsTo(models.Customer, {
    	foreignKey: 'customerId',
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