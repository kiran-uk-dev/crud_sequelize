const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
    'sequelize_db',
    'root',
    '',
    {
        host: 'localhost',
        dialect: 'mysql'
    }
);

module.exports = sequelize;