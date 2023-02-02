const { Sequelize, Model } = require('sequelize');
const sequelize = require('../database/database');

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