const fs = require("fs");
const path = require("path");
const alunoController = require("../controllers/alunosController.js");
const alunosTodosBD = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, "../models/alunosBD.json"))
);
require("iconv-lite").encodingExists("foo");

test("Teste de get Aluno By Matricula do Banco de dados Controller", () => {
  return alunoController.getAlunoByMatricula(701677).then((data) => {
    expect(data).toEqual({ aluno_ID: 6, matricula: 701677, nome: "Abba" });
  });
});

test("Teste de get Todos do Banco de dados Controller", () => {
  return alunoController.getAlunos().then((data) => {
    expect(data).toEqual(alunosTodosBD);
  });
});

test("Criar Aluno Controller", () => {
  return alunoController
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

test("Criar Aluno Quebrado Controller", () => {
  return alunoController
    .createAluno({ matricula: "1234568526963652", nome: "teste" })
    .then((data) => {
      expect(data).toEqual({ erro: "Aluno não criado" });
    });
});

test("Editar Aluno Controller", () => {
  return alunoController
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

test("Editar Aluno Quebrado Controller", () => {
  return alunoController
    .updateAluno(14, { matricula: "1234568526963652", nome: "teste update" })
    .then((data) => {
      expect(data).toEqual({ erro: "Aluno não alterado" });
    });
});

test("Editar Aluno inexistente Controller", () => {
  return alunoController
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

test("Deletar Aluno Controller", () => {
  return alunoController.deleteAluno(71).then((data) => {
    expect(data).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          affectedRows: 1,
        }),
      ])
    );
  });
});

test("Deletar Aluno inexistente Controller", () => {
  return alunoController.deleteAluno(61).then((data) => {
    expect(data).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          affectedRows: 0,
        }),
      ])
    );
  });
});
