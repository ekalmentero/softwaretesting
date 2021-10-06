const fs = require("fs");
const path = require("path");
const professorModel = require("../models/professor.js");
const professoresTodosBD = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, "../models/professoresBD.json"))
);
require("iconv-lite").encodingExists("foo");

test("Teste de get Professor By Matricula do Banco de dados", () => {
  return professorModel.getProfessorByMatricula(202020).then((data) => {
    expect(data).toEqual({
      professor_ID: 3,
      matricula: 202020,
      nome: "Kinder",
    });
  });
});

test("Teste de get Todos Professores do Banco de dados", () => {
  return professorModel.getProfessores().then((data) => {
    expect(data).toEqual(professoresTodosBD);
  });
});

test("Criar Professor", () => {
  return professorModel
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

test("Criar Professor Quebrado", () => {
  return professorModel
    .createProfessor({ matricula: "1234568526963652", nome: "teste" })
    .then((data) => {
      expect(data).toEqual({ erro: "Professor não criado" });
    });
});

test("Editar Professor", () => {
  return professorModel
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

test("Editar Professor Quebrado", () => {
  return professorModel
    .updateProfessor(1, {
      matricula: "1234568526963652",
      nome: "teste update",
    })
    .then((data) => {
      expect(data).toEqual({ erro: "Professor não alterado" });
    });
});

test("Editar Professor inexistente", () => {
  return professorModel
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

test("Deletar Professor", () => {
  return professorModel.deleteProfessor(7).then((data) => {
    expect(data).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          affectedRows: 1,
        }),
      ])
    );
  });
});

test("Deletar Professor inexistente", () => {
  return professorModel.deleteProfessor(0).then((data) => {
    expect(data).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          affectedRows: 0,
        }),
      ])
    );
  });
});
