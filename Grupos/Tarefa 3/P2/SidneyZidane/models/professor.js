const connect = require("./db.js").connect;

async function getProfessores() {
  const conn = await connect();
  let [rows] = await conn.query("SELECT * FROM professor;");
  let returnValue = [];
  for (i = 0; i < rows.length; i++) {
    returnValue.push(JSON.parse(JSON.stringify(rows[i])));
  }
  return returnValue;
}

async function getProfessorByMatricula(matricula) {
  const conn = await connect();
  let [rows] = await conn.query("SELECT * FROM professor where matricula=?;", [
    matricula,
  ]);
  let returnValue = rows[0];
  return returnValue;
}

async function createProfessor(professor) {
  try {
    const conn = await connect();
    const sql = "INSERT INTO professor(nome,matricula) VALUES (?,?);";
    const values = [professor.nome, professor.matricula];
    return await conn.query(sql, values);
  } catch (e) {
    return { erro: "Professor não criado" };
  }
}

async function updateProfessor(id, professor) {
  try {
    const conn = await connect();
    const sql = "UPDATE professor SET nome=?, matricula=? WHERE professor_ID=?";
    const values = [professor.nome, professor.matricula, id];
    return await conn.query(sql, values);
  } catch (e) {
    return { erro: "Professor não alterado" };
  }
}

async function deleteProfessor(id) {
  const conn = await connect();
  const sql = "DELETE FROM professor where professor_ID=?;";
  return await conn.query(sql, [id]);
}

module.exports = {
  getProfessores,
  getProfessorByMatricula,
  createProfessor,
  updateProfessor,
  deleteProfessor,
};
