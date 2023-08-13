const {Sequelize, Model, DataTypes}  = require('sequelize');

const sequelize = new Sequelize('Notes_App', 'root', '', {
    host: '127.0.0.1',
    dialect: 'mysql',
    port: 3306
  });

class Note extends Model{}

Note.init({
    ID_Note: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    Title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Content: {
        type: DataTypes.STRING,
        allowNull: true
    },
    isArchived: {
        type: DataTypes.BOOLEAN
    }
},
{
    sequelize, 
    modelName: "Note",
})

module.exports = Note;