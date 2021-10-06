const fs = require("fs");
const path = require("path");
const periodoController = require("../controllers/periodosController.js");
const periodosTodosBD = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, "../models/periodosBD.json"))
);
require("iconv-lite").encodingExists("foo");

test("Teste de get Periodo By ID do Banco de dados", () => {
  return periodoController.getPeriodoByID(1).then((data) => {
    expect(data).toEqual({
      periodo_ID: 1,
      ano: 2021,
      semestre: 1,
    });
  });
});

test("Teste de get Todos Periodos do Banco de dados", () => {
  return periodoController.getPeriodos().then((data) => {
    expect(data).toEqual(periodosTodosBD);
  });
});

test("Criar Periodo", () => {
  return periodoController
    .createPeriodo({ ano: 2023, semestre: 1 })
    .then((data) => {
      expect(data).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            affectedRows: 1,
          }),
        ])
      );
    });
});

test("Criar Periodo Quebrado", () => {
  return periodoController
    .createPeriodo({
      ano: 2222222222222222222222222222222222222,
      semestre: 22222222222222222222222222222222222,
    })
    .then((data) => {
      expect(data).toEqual({ erro: "Período não criado" });
    });
});

test("Editar Periodo", () => {
  return periodoController
    .updatePeriodo(3, { ano: 2024, semestre: 3 })
    .then((data) => {
      expect(data).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            affectedRows: 1,
          }),
        ])
      );
    });
});

test("Editar Periodo Quebrado", () => {
  return periodoController
    .updatePeriodo(1, {
      ano: 22222222222222222222222222222222222222222222222,
      semestre: 22222222222222222222222222222222222222222222222222,
    })
    .then((data) => {
      expect(data).toEqual({ erro: "Período não alterado" });
    });
});

test("Editar Período inexistente", () => {
  return periodoController
    .updatePeriodo(0, { ano: 2025, semestre: 1 })
    .then((data) => {
      expect(data).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            affectedRows: 0,
          }),
        ])
      );
    });
});

test("Deletar Periodo", () => {
  return periodoController.deletePeriodo(10).then((data) => {
    expect(data).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          affectedRows: 1,
        }),
      ])
    );
  });
});

test("Deletar Periodo inexistente", () => {
  return periodoController.deletePeriodo(2).then((data) => {
    expect(data).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          affectedRows: 0,
        }),
      ])
    );
  });
});
