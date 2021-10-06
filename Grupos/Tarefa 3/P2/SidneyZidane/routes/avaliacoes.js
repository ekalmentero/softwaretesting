const express = require("express");
const app = express();
const avaliacaoRouter = express.Router();
const avaliacaoController = require("../controllers/avaliacoesController.js");
avaliacaoRouter.use(express.json());
avaliacaoRouter.use(express.urlencoded({ extended: true }));

avaliacaoRouter.get("/avaliacoes", async function (req, res) {
  let avaliacoes = await avaliacaoController.getAvaliacoes();
  res.send(avaliacoes);
});

avaliacaoRouter.get("/avaliacoes/:id", async function (req, res) {
  let id = req.params.id;
  let avaliacoes = await avaliacaoController.getAvaliacaoByID(id);
  res.send(avaliacoes);
});

avaliacaoRouter.post("/avaliacoes", async function (req, res) {
  let avaliacao = req.body;
  let response = await avaliacaoController.createAvaliacao(avaliacao);
  res.send(response);
});

avaliacaoRouter.put("/avaliacoes/:id", async function (req, res) {
  let id = req.params.id;
  let avaliacao = req.body;
  let response = await avaliacaoController.updateAvaliacao(id, avaliacao);
  res.send(response);
});

avaliacaoRouter.delete("/avaliacoes/:id", async function (req, res) {
  let id = req.params.id;
  let response = await avaliacaoController.deleteAvaliacao(id);
  res.send(response);
});

avaliacaoRouter.get("/avaliacoes/aluno/:id", async function (req, res) {
  let id = req.params.id;
  let avaliacoes = await avaliacaoController.getAvaliacoesByAluno(id);
  res.send(avaliacoes);
});

avaliacaoRouter.get("/avaliacoes/cr/:id", async function (req, res) {
  let id = req.params.id;
  let cr = await avaliacaoController.getCrCalcByAluno(id);
  res.send({ cr });
});

avaliacaoRouter.get(
  "/avaliacoes/cr/:aluno_ID/:periodo_ID",
  async function (req, res) {
    let aluno_ID = req.params.aluno_ID;
    let periodo_ID = req.params.periodo_ID;
    let cr = await avaliacaoController.getCrCalcByAlunoAndPeriodo(
      aluno_ID,
      periodo_ID
    );
    res.send({ cr });
  }
);

avaliacaoRouter.get("/avaliacoes/turma/:id", async function (req, res) {
  let id = req.params.id;
  let media = await avaliacaoController.getMediaByTurma(id);
  res.send({ media });
});

avaliacaoRouter.get(
  "/avaliacoes/aluno/:aluno_ID/status/:turma_ID",
  async function (req, res) {
    let aluno_ID = req.params.aluno_ID;
    let turma_ID = req.params.turma_ID;
    let status = await avaliacaoController.getAlunoStatus(aluno_ID, turma_ID);
    res.send({ status });
  }
);

module.exports = avaliacaoRouter;
