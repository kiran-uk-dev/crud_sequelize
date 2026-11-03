
const sequelize = require('./utils/database');
const User = require('./models/user');

async function performCRUD() {
    try {
      
        await sequelize.authenticate();
        console.log('Database connected successfully');

       
        await sequelize.sync();

     
        const newUser = await User.create({
            name: 'Sagar Rawat',
            email: `sagar${Date.now()}@example.com`,
            age: 25
        });

        console.log('User inserted successfully:', newUser.toJSON());

       
        const users = await User.findAll();

        console.log('All Users:', users.map(user => user.toJSON()));

        
        const user = await User.findByPk(newUser.id);

        console.log('User found by ID:', user.toJSON());

       
        await user.update({
            name: 'Sagar Updated',
            age: 26
        });

        console.log('User updated successfully:', user.toJSON());

       
        await user.destroy();

        console.log('User deleted successfully');

    } catch (error) {
        console.error('Error:', error.message);
    } finally {
        await sequelize.close();
    }
}

performCRUD();
