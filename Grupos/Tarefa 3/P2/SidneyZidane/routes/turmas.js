const express = require("express");
const app = express();
const turmaRouter = express.Router();
const turmaController = require("../controllers/turmasController.js");
turmaRouter.use(express.json());
turmaRouter.use(express.urlencoded({ extended: true }));

turmaRouter.get("/turmas", async function (req, res) {
  let turmas = await turmaController.getTurmas();
  res.send(turmas);
});

turmaRouter.get("/turmas/:id", async function (req, res) {
  let id = req.params.id;
  let turmas = await turmaController.getTurmaByCodigo(id);
  res.send(turmas);
});

turmaRouter.post("/turmas", async function (req, res) {
  let turma = req.body;
  let response = await turmaController.createTurma(turma);
  res.send(response);
});

turmaRouter.put("/turmas/:id", async function (req, res) {
  let id = req.params.id;
  let turma = req.body;
  let response = await turmaController.updateTurma(id, turma);
  res.send(response);
});

turmaRouter.delete("/turmas/:id", async function (req, res) {
  let id = req.params.id;
  let response = await turmaController.deleteTurma(id);
  res.send(response);
});

turmaRouter.get("/turmas/periodo/:id", async function (req, res) {
  let id = req.params.id;
  let turmas = await turmaController.getTurmasByPeriodo(id);
  res.send(turmas);
});

module.exports = turmaRouter;
