//mocked test
const fs = require("fs");
const path = require("path");
const periodoModel = require("../models/periodo.js");
const periodosTodos = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, "../models/__mocks__/periodos.json"))
);

jest.mock("../models/periodo.js");

test("Teste de get Periodo By ID Mock", () => {
  expect(periodoModel.getPeriodoByID(1)).toEqual({
    ano: 2021,
    periodo_ID: 1,
    semestre: 1,
  });
});

test("Teste de get Periodo Mock", () => {
  expect(periodoModel.getPeriodos()).toEqual(periodosTodos);
});

test("Criar Periodo Mock", () => {
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

test("Criar Periodo Quebrado Mock", () => {
  return periodoModel
    .createPeriodo({
      ano: 22222222222222222222222222222222222222222222222222222,
      semestre: 22222222222222222222222222222222222222,
    })
    .then((data) => {
      expect(data).toEqual({ erro: "Periodo não criado" });
    });
});

test("Editar Periodo Mock", () => {
  return periodoModel
    .updatePeriodo(1, { ano: 2023, semestre: 1 })
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

test("Editar Periodo Quebrado Mock", () => {
  return periodoModel
    .updatePeriodo(14, {
      ano: 22222222222222222222222222222222222222222222222222222,
      semestre: 22222222222222222222222222222222222222,
    })
    .then((data) => {
      expect(data).toEqual({ erro: "Periodo não alterado" });
    });
});

test("Editar Periodo inexistente Mock", () => {
  return periodoModel
    .updatePeriodo(15, { ano: 2025, semestre: 1 })
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

test("Deletar Periodo Mock", () => {
  return periodoModel.deletePeriodo(2).then((data) => {
    expect(data).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          affectedRows: 1,
        }),
      ])
    );
  });
});

test("Deletar Periodo inexistente Mock", () => {
  return periodoModel.deletePeriodo(36).then((data) => {
    expect(data).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          affectedRows: 0,
        }),
      ])
    );
  });
});
