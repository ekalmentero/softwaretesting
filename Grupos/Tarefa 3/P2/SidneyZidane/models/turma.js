const connect = require("./db.js").connect;

async function getTurmas() {
  const conn = await connect();
  let [rows] = await conn.query("SELECT * FROM turma;");
  let returnValue = [];
  for (i = 0; i < rows.length; i++) {
    returnValue.push(JSON.parse(JSON.stringify(rows[i])));
  }
  return returnValue;
}

async function getTurmaByCodigo(codigo) {
  const conn = await connect();
  let [rows] = await conn.query("SELECT * FROM turma where codigo=?;", [
    codigo,
  ]);
  let returnValue = rows[0];
  return returnValue;
}

async function createTurma(turma) {
  try {
    const conn = await connect();
    const sql =
      "INSERT INTO turma(codigo,disciplina_ID,professor_ID,periodo_ID) VALUES (?,?,?,?);";
    const values = [
      turma.codigo,
      turma.disciplina_ID,
      turma.professor_ID,
      turma.periodo_ID,
    ];
    return await conn.query(sql, values);
  } catch (e) {
    return { erro: "Turma não criada" };
  }
}

async function updateTurma(id, turma) {
  try {
    const conn = await connect();
    const sql =
      "UPDATE turma SET codigo=?, disciplina_ID=?, professor_ID=?, periodo_ID=? WHERE turma_ID=?";
    const values = [
      turma.codigo,
      turma.disciplina_ID,
      turma.professor_ID,
      turma.periodo_ID,
      id,
    ];
    return await conn.query(sql, values);
  } catch (e) {
    return { erro: "Turma não alterada" };
  }
}

async function deleteTurma(id) {
  const conn = await connect();
  const sql = "DELETE FROM turma where turma_ID=?;";
  return await conn.query(sql, [id]);
}

async function getTurmasByPeriodo(periodo_ID) {
  const conn = await connect();
  let [rows] = await conn.query("SELECT * FROM turma WHERE periodo_ID=?;", [
    periodo_ID,
  ]);
  let returnValue = [];
  for (i = 0; i < rows.length; i++) {
    returnValue.push(JSON.parse(JSON.stringify(rows[i])));
  }
  return returnValue;
}

module.exports = {
  getTurmas,
  getTurmaByCodigo,
  createTurma,
  updateTurma,
  deleteTurma,
  getTurmasByPeriodo,
};
