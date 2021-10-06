const express = require("express");
const app = express();
const disciplinaRouter = express.Router();
const disciplinaController = require("../controllers/disciplinasController.js");
disciplinaRouter.use(express.json());
disciplinaRouter.use(express.urlencoded({ extended: true }));

disciplinaRouter.get("/disciplinas", async function (req, res) {
  let disciplinas = await disciplinaController.getDisciplinas();
  res.send(disciplinas);
});

disciplinaRouter.get("/disciplinas/:codigo", async function (req, res) {
  let codigo = req.params.codigo;
  let disciplina = await disciplinaController.getDisciplinaByCodigo(codigo);
  res.send(disciplina);
});

disciplinaRouter.post("/disciplinas", async function (req, res) {
  let disciplina = req.body;
  let response = await disciplinaController.createDisciplina(disciplina);
  res.send(response);
});

disciplinaRouter.put("/disciplinas/:id", async function (req, res) {
  let id = req.params.id;
  let disciplina = req.body;
  let response = await disciplinaController.updateDisciplina(id, disciplina);
  res.send(response);
});

disciplinaRouter.delete("/disciplinas/:id", async function (req, res) {
  let id = req.params.id;
  let response = await disciplinaController.deleteDisciplina(id);
  res.send(response);
});

module.exports = disciplinaRouter;
