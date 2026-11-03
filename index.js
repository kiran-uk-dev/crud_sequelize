const sequelize = require('./utils/database');
const User = require('./models/user');

async function startServer() {
    try {
       
        await sequelize.authenticate();

        console.log('MySQL Connected Successfully');

       
        await sequelize.sync();

        console.log('Users table created successfully');

    } catch (error) {
        console.error('Database connection error:', error);
    }
}

startServer();