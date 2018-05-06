module.exports = (sequelize, DataTypes) => {
  const Customer = sequelize.define('Customer', {
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    phone_no: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  Customer.associate = (models) => {
    // associations can be defined here
    Customer.hasMany(models.Menu, {
      foreginKey: 'customerId',
      onDelete: 'CASCADE'
    });

    Customer.hasOne(models.Order, {
      foreginKey: 'customerId',
      onDelete: 'CASCADE'
    });

  };
  return Customer;
};