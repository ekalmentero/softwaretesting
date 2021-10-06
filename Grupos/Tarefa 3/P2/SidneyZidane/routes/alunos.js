const express = require("express");
const app = express();
const alunoRouter = express.Router();
const alunoController = require("../controllers/alunosController.js");
alunoRouter.use(express.json());
alunoRouter.use(express.urlencoded({ extended: true }));

alunoRouter.get("/alunos", async function (req, res) {
  let alunos = await alunoController.getAlunos();
  res.send(alunos);
});

alunoRouter.get("/alunos/:matricula", async function (req, res) {
  let matricula = req.params.matricula;
  let aluno = await alunoController.getAlunoByMatricula(matricula);
  res.send(aluno);
});

alunoRouter.post("/alunos", async function (req, res) {
  let aluno = req.body;
  let response = await alunoController.createAluno(aluno);
  res.send(response);
});

alunoRouter.put("/alunos/:id", async function (req, res) {
  let id = req.params.id;
  let aluno = req.body;
  let response = await alunoController.updateAluno(id, aluno);
  res.send(response);
});

alunoRouter.delete("/alunos/:id", async function (req, res) {
  let id = req.params.id;
  let response = await alunoController.deleteAluno(id);
  res.send(response);
});

module.exports = alunoRouter;
