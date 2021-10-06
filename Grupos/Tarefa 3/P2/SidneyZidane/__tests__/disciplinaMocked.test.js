//mocked test
const fs = require("fs");
const path = require("path");
const disciplinaModel = require("../models/disciplina.js");
const disciplinaTodos = JSON.parse(
  fs.readFileSync(
    path.resolve(__dirname, "../models/__mocks__/disciplinas.json")
  )
);

jest.mock("../models/disciplina.js");

test("Teste de get Disciplina By Codigo Mock", () => {
  expect(disciplinaModel.getDisciplinaByCodigo(172839)).toEqual({
    disciplina_ID: 1,
    codigo: 172839,
    nome: "teste update",
  });
});

test("Teste de get Disciplina Mock", () => {
  expect(disciplinaModel.getDisciplinas()).toEqual(disciplinaTodos);
});

test("Criar Disciplina Mock", () => {
  return disciplinaModel
    .createDisciplina({ codigo: "123456456", nome: "teste" })
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

test("Criar Disciplina Quebrado Mock", () => {
  return disciplinaModel
    .createDisciplina({ codigo: "1234568526963652", nome: "teste" })
    .then((data) => {
      expect(data).toEqual({ erro: "Disciplina não criada" });
    });
});

test("Editar Disciplina Mock", () => {
  return disciplinaModel
    .updateDisciplina(1, { codigo: "172839", nome: "teste update" })
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

test("Editar Disciplina Quebrado Mock", () => {
  return disciplinaModel
    .updateDisciplina(1, {
      codigo: "1234568526963652",
      nome: "teste update",
    })
    .then((data) => {
      expect(data).toEqual({ erro: "Disciplina não alterada" });
    });
});

test("Editar Disciplina inexistente Mock", () => {
  return disciplinaModel
    .updateDisciplina(2, { matricula: "256", nome: "teste update" })
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

test("Deletar Disciplina Mock", () => {
  return disciplinaModel.deleteDisciplina(12).then((data) => {
    expect(data).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          affectedRows: 1,
        }),
      ])
    );
  });
});

test("Deletar Disciplina inexistente Mock", () => {
  return disciplinaModel.deleteDisciplina(2).then((data) => {
    expect(data).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          affectedRows: 0,
        }),
      ])
    );
  });
});
