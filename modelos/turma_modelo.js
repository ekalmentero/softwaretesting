const { Sequelize, Model } = require('sequelize');
const sequelize = new Sequelize('ufrrj', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

class Turma extends Model {}
Turma.init({
  codigo: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  professor: {
    type: Sequelize.STRING
  },
  disciplina: {
    type: Sequelize.INTEGER,
    references: {
      model: 'disciplina',
      key: 'codigo'
    }
  },
  sala: {
    type: Sequelize.STRING
  },
  horario: {
    type: Sequelize.STRING
  }
}, { sequelize, modelName: 'turma' });

module.exports = Turma;