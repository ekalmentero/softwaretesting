const fs = require("fs");
const path = require("path");
const turmaModel = require("../models/turma.js");
const turmasTodosBD = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, "../models/turmasBD.json"))
);
require("iconv-lite").encodingExists("foo");

test("Teste de get Turma By Codigo", () => {
  return turmaModel.getTurmaByCodigo(123456).then((data) => {
    expect(data).toEqual({
      turma_ID: 1,
      codigo: 123456,
      disciplina_ID: 1,
      professor_ID: 1,
      periodo_ID: 1,
    });
  });
});

test("Teste de get Todos do Banco de dados", () => {
  return turmaModel.getTurmas().then((data) => {
    expect(data).toEqual(turmasTodosBD);
  });
});

test("Criar Turma", () => {
  return turmaModel
    .createTurma({
      turma_ID: 5,
      codigo: 54321,
      disciplina_ID: 1,
      professor_ID: 1,
      periodo_ID: 1,
    })
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

test("Criar Turma Quebrada", () => {
  return turmaModel
    .createTurma({
      turma_ID: 9999999999999,
      codigo: 9999999999999,
      disciplina_ID: 3,
      professor_ID: 2,
      periodo_ID: 4,
    })
    .then((data) => {
      expect(data).toEqual({ erro: "Turma não criada" });
    });
});

test("Editar Turma", () => {
  return turmaModel
    .updateTurma(1, {
      turma_ID: 1,
      codigo: 123456,
      disciplina_ID: 1,
      professor_ID: 1,
      periodo_ID: 1,
    })
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

test("Editar Turma Quebrado", () => {
  return turmaModel
    .updateTurma(1, {
      turma_ID: 9999999999999,
      codigo: 9999999999999,
      disciplina_ID: 3,
      professor_ID: 2,
      periodo_ID: 4,
    })
    .then((data) => {
      expect(data).toEqual({ erro: "Turma não alterada" });
    });
});

test("Editar Turma inexistente", () => {
  return turmaModel
    .updateTurma(0, {
      turma_ID: 1,
      codigo: 123456,
      disciplina_ID: 1,
      professor_ID: 1,
      periodo_ID: 1,
    })
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

test("Deletar Turma", () => {
  return turmaModel.deleteTurma(9).then((data) => {
    expect(data).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          affectedRows: 1,
        }),
      ])
    );
  });
});

test("Deletar Turma inexistente", () => {
  return turmaModel.deleteTurma(0).then((data) => {
    expect(data).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          affectedRows: 0,
        }),
      ])
    );
  });
});
