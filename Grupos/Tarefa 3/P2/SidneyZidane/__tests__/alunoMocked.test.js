//mocked test
const fs = require("fs");
const path = require("path");
const alunoModel = require("../models/aluno.js");
const alunosTodos = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, "../models/__mocks__/alunos.json"))
);

jest.mock("../models/aluno.js");

test("Teste de get Aluno By Matricula Mock", () => {
  expect(alunoModel.getAlunoByMatricula(684958)).toEqual({
    aluno_ID: 2,
    matricula: 684958,
    nome: "Lanita",
  });
});

test("Teste de get Aluno Mock", () => {
  expect(alunoModel.getAlunos()).toEqual(alunosTodos);
});

test("Criar Aluno Mock", () => {
  return alunoModel
    .createAluno({ matricula: "123456456", nome: "teste" })
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

test("Criar Aluno Quebrado Mock", () => {
  return alunoModel
    .createAluno({ matricula: "1234568526963652", nome: "teste" })
    .then((data) => {
      expect(data).toEqual({ erro: "Aluno não criado" });
    });
});

test("Editar Aluno Mock", () => {
  return alunoModel
    .updateAluno(14, { matricula: "45678", nome: "teste update" })
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

test("Editar Aluno Quebrado Mock", () => {
  return alunoModel
    .updateAluno(14, { matricula: "1234568526963652", nome: "teste update" })
    .then((data) => {
      expect(data).toEqual({ erro: "Aluno não alterado" });
    });
});

test("Editar Aluno inexistente Mock", () => {
  return alunoModel
    .updateAluno(15, { matricula: "45678", nome: "teste update" })
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

test("Deletar Aluno Mock", () => {
  return alunoModel.deleteAluno(38).then((data) => {
    expect(data).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          affectedRows: 1,
        }),
      ])
    );
  });
});

test("Deletar Aluno inexistente Mock", () => {
  return alunoModel.deleteAluno(36).then((data) => {
    expect(data).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          affectedRows: 0,
        }),
      ])
    );
  });
});
