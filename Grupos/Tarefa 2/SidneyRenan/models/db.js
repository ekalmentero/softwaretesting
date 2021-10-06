async function connect() {
    if(global.connection && global.connection.state !== 'disconnected')
        return global.connection;

    const mysql = require("mysql2/promise");
    const connection = await mysql.createConnection("mysql://root:@localhost:3306/alunos");
    global.connection = connection;
    return connection;
}

async function selectAlunos(){
  const conn = await connect();
  let [rows] = await conn.query('SELECT * FROM estudantes;');
  let returnValue = [];
  for (i = 0; i < rows.length; i++) {
      returnValue.push(JSON.parse(JSON.stringify(rows[i])));
  }
    return returnValue;
}

async function selectAluno(matricula){
  const conn = await connect();
  let [rows] = await conn.query('SELECT * FROM estudantes where matricula=?;', [matricula]);
  let returnValue = rows[0]
  return returnValue;
}
 
module.exports = {selectAlunos, selectAluno}