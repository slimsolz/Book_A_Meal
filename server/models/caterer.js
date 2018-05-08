module.exports = (sequelize, DataTypes) => {
  const Caterer = sequelize.define('Caterer', {
    storeName:{
     type: DataTypes.STRING,
     allowNull: false
   },
    username: {
      type: DataTypes.STRING,
      allowNull: false
    }
    email:{
     type: DataTypes.STRING,
     allowNull: false,
     unique: true
    },
    password:{
     type: DataTypes.STRING,
     allowNull: false
    },
    phone_no:{
     type: DataTypes.STRING,
     allowNull: false
    },
    address:{
     type: DataTypes.STRING,
     allowNull: false
    },
    img_path:{
     type: DataTypes.STRING,
     allowNull: false
    }
  });

  Caterer.associate = (models) => {
    // associations can be defined here
    Caterer.hasMany(models.Meal, {
      foreginKey: 'catererId',
      onDelete: 'CASCADE'
    });

    Caterer.hasMany(models.Menu, {
      foreginKey: 'catererId',
      onDelete: 'CASCADE'
    });

    Caterer.hasMany(models.Order, {
      foreginKey: 'catererId',
      onDelete: 'CASCADE'
    });
  };
  return Caterer;
};