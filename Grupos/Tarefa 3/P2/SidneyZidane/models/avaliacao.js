const connect = require("./db.js").connect;

async function getAvaliacoes() {
  const conn = await connect();
  let [rows] = await conn.query("SELECT * FROM avaliacao;");
  let returnValue = [];
  for (i = 0; i < rows.length; i++) {
    returnValue.push(JSON.parse(JSON.stringify(rows[i])));
  }
  return returnValue;
}

async function getAvaliacaoByID(id) {
  const conn = await connect();
  let [rows] = await conn.query(
    "SELECT * FROM avaliacao where avaliacao_ID=?;",
    [id]
  );
  let returnValue = rows[0];
  return returnValue;
}

async function createAvaliacao(avaliacao) {
  try {
    const conn = await connect();
    const sql =
      "INSERT INTO avaliacao (turma_ID,aluno_ID,peso,nota) VALUES (?,?,?,?);";
    const values = [
      avaliacao.turma,
      avaliacao.aluno,
      avaliacao.peso,
      avaliacao.nota,
    ];
    return await conn.query(sql, values);
  } catch (e) {
    return { erro: "Avaliacao não criada" };
  }
}

async function updateAvaliacao(id, avaliacao) {
  try {
    const conn = await connect();
    const sql =
      "UPDATE avaliacao SET turma_ID=?, aluno_ID=?, peso=?, nota=? WHERE avaliacao_ID=?";
    const values = [
      avaliacao.turma,
      avaliacao.aluno,
      avaliacao.peso,
      avaliacao.nota,
      id,
    ];
    return await conn.query(sql, values);
  } catch (e) {
    return { erro: "Avaliacao não alterada" };
  }
}

async function deleteAvaliacao(id) {
  const conn = await connect();
  const sql = "DELETE FROM avaliacao where avaliacao_ID=?;";
  return await conn.query(sql, [id]);
}

async function getAvaliacoesByAluno(aluno_id) {
  const conn = await connect();
  let [rows] = await conn.query("SELECT * FROM avaliacao WHERE aluno_ID=?;", [
    aluno_id,
  ]);
  let returnValue = [];
  for (i = 0; i < rows.length; i++) {
    returnValue.push(JSON.parse(JSON.stringify(rows[i])));
  }
  return returnValue;
}

async function getAvaliacoesByAlunoAndPeriodo(aluno_ID, periodo_ID) {
  const conn = await connect();
  let [
    rows,
  ] = await conn.query(
    "SELECT avaliacao.nota, avaliacao.peso, avaliacao.turma_ID, avaliacao.aluno_ID, periodo.ano, periodo.semestre FROM `avaliacao` INNER JOIN turma on turma.turma_ID = avaliacao.turma_ID INNER JOIN periodo on periodo.periodo_ID = turma.periodo_ID WHERE avaliacao.aluno_ID =? AND turma.periodo_ID =?",
    [aluno_ID, periodo_ID]
  );
  let returnValue = [];
  for (i = 0; i < rows.length; i++) {
    returnValue.push(JSON.parse(JSON.stringify(rows[i])));
  }
  return returnValue;
}

async function getAvaliacoesByAlunoAndTurma(aluno_ID, turma_ID) {
  const conn = await connect();
  let [
    rows,
  ] = await conn.query(
    "SELECT * FROM `avaliacao` WHERE aluno_ID=? AND turma_ID=?",
    [aluno_ID, turma_ID]
  );
  let returnValue = [];
  for (i = 0; i < rows.length; i++) {
    returnValue.push(JSON.parse(JSON.stringify(rows[i])));
  }
  return returnValue;
}

async function getAvaliacoesByTurma(turma_ID) {
  const conn = await connect();
  let [rows] = await conn.query("SELECT * FROM `avaliacao` WHERE turma_ID=?", [
    turma_ID,
  ]);
  let returnValue = [];
  for (i = 0; i < rows.length; i++) {
    returnValue.push(JSON.parse(JSON.stringify(rows[i])));
  }
  return returnValue;
}

module.exports = {
  getAvaliacoes,
  getAvaliacaoByID,
  createAvaliacao,
  updateAvaliacao,
  deleteAvaliacao,
  getAvaliacoesByAluno,
  getAvaliacoesByAlunoAndPeriodo,
  getAvaliacoesByAlunoAndTurma,
  getAvaliacoesByTurma,
};
