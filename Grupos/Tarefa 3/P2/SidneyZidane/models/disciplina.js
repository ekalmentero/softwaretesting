const connect = require("./db.js").connect;

async function getDisciplinas() {
  const conn = await connect();
  let [rows] = await conn.query("SELECT * FROM disciplina;");
  let returnValue = [];
  for (i = 0; i < rows.length; i++) {
    returnValue.push(JSON.parse(JSON.stringify(rows[i])));
  }
  return returnValue;
}

async function getDisciplinaByCodigo(codigo) {
  const conn = await connect();
  let [rows] = await conn.query("SELECT * FROM disciplina where codigo=?;", [
    codigo,
  ]);
  let returnValue = rows[0];
  return returnValue;
}

async function createDisciplina(disciplina) {
  try {
    const conn = await connect();
    const sql = "INSERT INTO disciplina(codigo,nome) VALUES (?,?);";
    const values = [disciplina.codigo, disciplina.nome];
    return await conn.query(sql, values);
  } catch (e) {
    return { erro: "Disciplina não criada" };
  }
}

async function updateDisciplina(id, disciplina) {
  try {
    const conn = await connect();
    const sql = "UPDATE disciplina SET nome=?, codigo=? WHERE disciplina_ID=?";
    const values = [disciplina.nome, disciplina.codigo, id];
    return await conn.query(sql, values);
  } catch (e) {
    return { erro: "Disciplina não alterada" };
  }
}

async function deleteDisciplina(id) {
  const conn = await connect();
  const sql = "DELETE FROM disciplina where disciplina_ID=?;";
  return await conn.query(sql, [id]);
}

module.exports = {
  getDisciplinas,
  getDisciplinaByCodigo,
  createDisciplina,
  updateDisciplina,
  deleteDisciplina,
};
