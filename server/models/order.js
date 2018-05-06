module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    total: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    deliveryAddress: {
      type: DataTypes.STRING,
      allowNull: false
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  Order.associate = (models) => {
    // associations can be defined here
    Order.belongsTo(models.Caterer, {
      foreignKey: 'catererId',
      onDelete: 'CASCADE'
    });

    Order.belongsTo(models.Customer, {
      foreignKey: 'customerId',
      onDelete: 'CASCADE'
    });

    Order.hasMany(models.Meal, {
      foreignKey: 'orderId',
      onDelete: 'CASCADE'
    });
  };

  return Order;
};