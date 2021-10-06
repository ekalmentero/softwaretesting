const connect = require("./db.js").connect;

async function getAlunos() {
  const conn = await connect();
  let [rows] = await conn.query("SELECT * FROM aluno;");
  let returnValue = [];
  for (i = 0; i < rows.length; i++) {
    returnValue.push(JSON.parse(JSON.stringify(rows[i])));
  }
  return returnValue;
}

async function getAlunoByMatricula(matricula) {
  const conn = await connect();
  let [rows] = await conn.query("SELECT * FROM aluno where matricula=?;", [
    matricula,
  ]);
  let returnValue = rows[0];
  return returnValue;
}

async function createAluno(aluno) {
  try {
    const conn = await connect();
    const sql = "INSERT INTO aluno(nome,matricula) VALUES (?,?);";
    const values = [aluno.nome, aluno.matricula];
    return await conn.query(sql, values);
  } catch (e) {
    return { erro: "Aluno não criado" };
  }
}

async function updateAluno(id, aluno) {
  try {
    const conn = await connect();
    const sql = "UPDATE aluno SET nome=?, matricula=? WHERE aluno_ID=?";
    const values = [aluno.nome, aluno.matricula, id];
    return await conn.query(sql, values);
  } catch (e) {
    return { erro: "Aluno não alterado" };
  }
}

async function deleteAluno(id) {
  const conn = await connect();
  const sql = "DELETE FROM aluno where aluno_ID=?;";
  return await conn.query(sql, [id]);
}

module.exports = {
  getAlunos,
  getAlunoByMatricula,
  createAluno,
  updateAluno,
  deleteAluno,
};
