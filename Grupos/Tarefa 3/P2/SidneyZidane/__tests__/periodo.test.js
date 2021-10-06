const fs = require("fs");
const path = require("path");
const periodoModel = require("../models/periodo.js");
const periodosTodosBD = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, "../models/periodosBD.json"))
);
require("iconv-lite").encodingExists("foo");

test("Teste de get Periodo By ID do Banco de dados", () => {
  return periodoModel.getPeriodoByID(1).then((data) => {
    expect(data).toEqual({
      periodo_ID: 1,
      ano: 2021,
      semestre: 1,
    });
  });
});

test("Teste de get Todos Periodos do Banco de dados", () => {
  return periodoModel.getPeriodos().then((data) => {
    expect(data).toEqual(periodosTodosBD);
  });
});

test("Criar Periodo", () => {
  return periodoModel.createPeriodo({ ano: 2023, semestre: 1 }).then((data) => {
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
  return periodoModel
    .createPeriodo({
      ano: 2222222222222222222222222222222222222,
      semestre: 22222222222222222222222222222222222,
    })
    .then((data) => {
      expect(data).toEqual({ erro: "Período não criado" });
    });
});

test("Editar Periodo", () => {
  return periodoModel
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
  return periodoModel
    .updatePeriodo(1, {
      ano: 22222222222222222222222222222222222222222222222,
      semestre: 22222222222222222222222222222222222222222222222222,
    })
    .then((data) => {
      expect(data).toEqual({ erro: "Período não alterado" });
    });
});

test("Editar Período inexistente", () => {
  return periodoModel
    .updatePeriodo(8, { ano: 2025, semestre: 1 })
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
  return periodoModel.deletePeriodo(7).then((data) => {
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
  return periodoModel.deletePeriodo(2).then((data) => {
    expect(data).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          affectedRows: 0,
        }),
      ])
    );
  });
});
