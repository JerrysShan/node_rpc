const Sequelize = require('sequelize');
const sequelize = new Sequelize('webio', 'webio_rw', 'webio_rw_p', {
  host: '127.0.0.1',
  port: 3306,
  dialect: 'mysql',
  pool: {
    max: 20,
    min: 0,
    acquire: 30000,
    idle: 10000,
  }
});

sequelize.authenticate().then(re => {
  console.log('mysql connection success');
}).catch(err => {
  console.log(err);
});

exports.Account = require('./account')(sequelize);





