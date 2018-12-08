const faker = require('faker');
const uuidv4 = require('uuid/v4');
const { sample } = require('lodash');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('Users', Array(100).fill(null).map(idx => {
      return {
        id: uuidv4(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        facebookId: idx,
        email: faker.internet.email(),
        dob: faker.date.between('1970-01-01', '1999-01-01'),
        address: faker.address.streetAddress(),
        city: faker.address.city(),
        state: faker.address.stateAbbr(),
        postal: faker.address.zipCode(),
        phone: faker.phone.phoneNumber('###.###.####'),
        picture: faker.image.avatar(),
        gender: sample(['male', 'female']),
        createdAt: new Date(),
        updatedAt: new Date()
      };
    }), {});
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
