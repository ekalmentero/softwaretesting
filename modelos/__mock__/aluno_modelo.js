const Sequelize = require('sequelize');
const sequelize = new Sequelize('database_name', 'user', 'password', {
  host: 'localhost',
  dialect: 'mysql'
});

const Aluno = sequelize.define('aluno', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  matricula: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  nome: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false
  },
  data_nascimento: {
    type: Sequelize.DATEONLY,
    allowNull: false
  }
});

async function inserirAluno(matricula, nome, email, data_nascimento) {
  try {
    await Aluno.create({
      matricula: matricula,
      nome: nome,
      email: email,
      data_nascimento: data_nascimento
    });
    console.log('Aluno inserido com sucesso!');
  } catch (error) {
    console.error('Erro ao inserir aluno: ', error);
  }
}

inserirAluno(12345, 'João da Silva', 'joao.silva@email.com', '1998-01-01');