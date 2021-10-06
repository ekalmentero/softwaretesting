const express = require("express");
const app = express();
const port = 3000;

const alunoRouter = require("./routes/alunos.js");
const professorRouter = require("./routes/professores.js");
const disciplinaRouter = require("./routes/disciplinas.js");
const periodoRouter = require("./routes/periodos.js");
const turmaRouter = require("./routes/turmas.js");
const avaliacaoRouter = require("./routes/avaliacoes.js");

app.use(alunoRouter);
app.use(professorRouter);
app.use(disciplinaRouter);
app.use(periodoRouter);
app.use(turmaRouter);
app.use(avaliacaoRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
