const { Sequelize } = require('sequelize');

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize('Notes_App', 'root', '', {
  host: '127.0.0.1',
  dialect: 'mysql',
  port: 3306
});

async function test_Connection(){
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}

test_Connection();