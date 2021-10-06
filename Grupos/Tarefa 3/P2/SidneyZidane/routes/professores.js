const express = require("express");
const app = express();
const professorRouter = express.Router();
const professorController = require("../controllers/professoresController.js");
professorRouter.use(express.json());
professorRouter.use(express.urlencoded({ extended: true }));

professorRouter.get("/professores", async function (req, res) {
  let professores = await professorController.getProfessores();
  res.send(professores);
});

professorRouter.get("/professores/:matricula", async function (req, res) {
  let matricula = req.params.matricula;
  let professores = await professorController.getProfessorByMatricula(
    matricula
  );
  res.send(professores);
});

professorRouter.post("/professores", async function (req, res) {
  let professor = req.body;
  let response = await professorController.createProfessor(professor);
  res.send(response);
});

professorRouter.put("/professores/:id", async function (req, res) {
  let id = req.params.id;
  let professor = req.body;
  let response = await professorController.updateProfessor(id, professor);
  res.send(response);
});

professorRouter.delete("/professores/:id", async function (req, res) {
  let id = req.params.id;
  let response = await professorController.deleteProfessor(id);
  res.send(response);
});

module.exports = professorRouter;
