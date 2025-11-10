const usersServiceFactory = require('../../../../../../usersManagement/users/service/usersServiceFactory');

const isUserExists = async () => {
  await (await usersServiceFactory.fetchUsersService()).isUserExists(session, userDTO);
    
};

module.exports = {isUserExists};