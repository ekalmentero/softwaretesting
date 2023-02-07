const { Sequelize, Model } = require('sequelize');
const sequelize = new Sequelize('ufrrj', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

class Disciplina extends Model {}
Disciplina.init({
  codigo: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  departamento: {
    type: Sequelize.STRING
  },
  nome: {
    type: Sequelize.STRING
  },
  carga_horaria: {
    type: Sequelize.INTEGER
  }
}, { sequelize, modelName: 'disciplina' });

module.exports = Disciplina;