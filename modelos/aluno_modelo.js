const { Sequelize, Model } = require('sequelize');
const sequelize = new Sequelize('ufrrj', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
  });

class Aluno extends Model {}
Aluno.init({
    matricula: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    data_nascimento: {
        type: Sequelize.DATE,
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    }, { sequelize, modelName: 'aluno' });

module.exports = Aluno;