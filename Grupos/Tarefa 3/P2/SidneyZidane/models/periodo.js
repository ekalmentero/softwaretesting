const connect = require("./db.js").connect;

async function getPeriodos() {
  const conn = await connect();
  let [rows] = await conn.query("SELECT * FROM periodo;");
  let returnValue = [];
  for (i = 0; i < rows.length; i++) {
    returnValue.push(JSON.parse(JSON.stringify(rows[i])));
  }
  return returnValue;
}

async function getPeriodoByID(id) {
  const conn = await connect();
  let [rows] = await conn.query("SELECT * FROM periodo where periodo_ID=?;", [
    id,
  ]);
  let returnValue = rows[0];
  return returnValue;
}

async function createPeriodo(periodo) {
  try {
    const conn = await connect();
    const sql = "INSERT INTO periodo(ano,semestre) VALUES (?,?);";
    const values = [periodo.ano, periodo.semestre];
    return await conn.query(sql, values);
  } catch (e) {
    return { erro: "Período não criado" };
  }
}

async function updatePeriodo(id, periodo) {
  try {
    const conn = await connect();
    const sql = "UPDATE periodo SET ano=?, semestre=? WHERE periodo_ID=?";
    const values = [periodo.ano, periodo.semestre, id];
    return await conn.query(sql, values);
  } catch (e) {
    return { erro: "Período não alterado" };
  }
}

async function deletePeriodo(id) {
  const conn = await connect();
  const sql = "DELETE FROM periodo where periodo_ID=?;";
  return await conn.query(sql, [id]);
}

module.exports = {
  getPeriodos,
  getPeriodoByID,
  createPeriodo,
  updatePeriodo,
  deletePeriodo,
};
