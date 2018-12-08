module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4
      },
      firstName: Sequelize.STRING,
      lastName: Sequelize.STRING,
      email: Sequelize.STRING,
      dob: Sequelize.DATEONLY,
      facebookId: Sequelize.STRING,
      address: Sequelize.STRING,
      city: Sequelize.STRING,
      state: Sequelize.STRING,
      postal: Sequelize.STRING,
      phone: Sequelize.STRING,
      picture: Sequelize.STRING,
      gender: Sequelize.STRING,
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      deletedAt: {
        allowNull: true,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface) => {
    return queryInterface.dropTable('Users');
  }
};
