module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Orders', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    quantity: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    total: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    deliveryAddress: {
      type: Sequelize.STRING,
      allowNull: false
    },
    status: {
      type: Sequelize.STRING,
      allowNull: false
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
    catererId: {
      type: Sequelize.INTEGER,
      onDelete: 'CASCADE',
      allowNull: false,
      references: {
        model: 'Caterers',
        key: 'id',
      }
    },
    customerId: {
      type: Sequelize.INTEGER,
      onDelete: 'CASCADE',
      allowNull: false,
      references: {
        model: 'Customers',
        key: 'id',
      }
    }
  }),

  down: (queryInterface, Sequelize) => queryInterface.dropTable('Orders')

};