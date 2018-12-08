module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      type: DataTypes.UUIDV4,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    facebookId: DataTypes.STRING,
    email: DataTypes.STRING,
    dob: DataTypes.DATEONLY,
    address: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    postal: DataTypes.STRING,
    phone: DataTypes.STRING,
    picture: DataTypes.STRING,
    gender: DataTypes.ENUM('male', 'female'),
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
    deletedAt: DataTypes.DATE
  }, {});
  return User;
};
