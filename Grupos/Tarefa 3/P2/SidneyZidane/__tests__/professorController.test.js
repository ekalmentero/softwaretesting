const fs = require("fs");
const path = require("path");
const professorController = require("../controllers/professoresController.js");
const professoresTodosBD = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, "../models/professoresBD.json"))
);
require("iconv-lite").encodingExists("foo");

test("Teste de get Professor By Matricula do Banco de dados Controller", () => {
  return professorController.getProfessorByMatricula(202020).then((data) => {
    expect(data).toEqual({
      professor_ID: 3,
      matricula: 202020,
      nome: "Kinder",
    });
  });
});

test("Teste de get Todos Professores do Banco de dados Controller", () => {
  return professorController.getProfessores().then((data) => {
    expect(data).toEqual(professoresTodosBD);
  });
});

test("Criar Professor Controller", () => {
  return professorController
    .createProfessor({ matricula: "1234567", nome: "Professor Teste" })
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

test("Criar Professor Quebrado Controller", () => {
  return professorController
    .createProfessor({ matricula: "1234568526963652", nome: "teste" })
    .then((data) => {
      expect(data).toEqual({ erro: "Professor não criado" });
    });
});

test("Editar Professor Controller", () => {
  return professorController
    .updateProfessor(3, { matricula: "202020", nome: "Kinder" })
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

test("Editar Professor Quebrado Controller", () => {
  return professorController
    .updateProfessor(1, {
      matricula: "1234568526963652",
      nome: "teste update",
    })
    .then((data) => {
      expect(data).toEqual({ erro: "Professor não alterado" });
    });
});

test("Editar Professor inexistente Controller", () => {
  return professorController
    .updateProfessor(0, { matricula: "45678", nome: "teste update" })
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

test("Deletar Professor Controller", () => {
  return professorController.deleteProfessor(7).then((data) => {
    expect(data).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          affectedRows: 1,
        }),
      ])
    );
  });
});

test("Deletar Professor inexistente Controller", () => {
  return professorController.deleteProfessor(0).then((data) => {
    expect(data).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          affectedRows: 0,
        }),
      ])
    );
  });
});
