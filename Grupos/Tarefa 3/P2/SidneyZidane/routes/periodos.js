const express = require("express");
const app = express();
const periodoRouter = express.Router();
const periodoController = require("../controllers/periodosController.js");
periodoRouter.use(express.json());
periodoRouter.use(express.urlencoded({ extended: true }));

periodoRouter.get("/periodos", async function (req, res) {
  let periodos = await periodoController.getPeriodos();
  res.send(periodos);
});

periodoRouter.get("/periodos/:id", async function (req, res) {
  let id = req.params.id;
  let periodo = await periodoController.getPeriodoByID(id);
  res.send(periodo);
});

periodoRouter.post("/periodos", async function (req, res) {
  let periodo = req.body;
  let response = await periodoController.createPeriodo(periodo);
  res.send(response);
});

periodoRouter.put("/periodos/:id", async function (req, res) {
  let id = req.params.id;
  let periodo = req.body;
  let response = await periodoController.updatePeriodo(id, periodo);
  res.send(response);
});

periodoRouter.delete("/periodos/:id", async function (req, res) {
  let id = req.params.id;
  let response = await periodoController.deletePeriodo(id);
  res.send(response);
});

module.exports = periodoRouter;
