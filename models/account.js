const Sequelize = require('sequelize');

module.exports = (client) => {
  const User = client.define('account', {
    id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: Sequelize.STRING },
    idCard: { type: Sequelize.STRING, field: 'id_card' },
    gender: { type: Sequelize.INTEGER },
    zip: { type: Sequelize.STRING },
    address: { type: Sequelize.STRING },
    birthday: { type: Sequelize.STRING },
    mobile: { type: Sequelize.STRING },
    tel: { type: Sequelize.STRING },
    fax: { type: Sequelize.STRING },
    email: { type: Sequelize.STRING },
    nation: { type: Sequelize.STRING },
    created: { type: Sequelize.STRING },
    updated: { type: Sequelize.DATE }
  }, {
      indexes: [],
      timestamps: false,
      underscored: true,
      tableName: 'account'
    });
  return User;
};