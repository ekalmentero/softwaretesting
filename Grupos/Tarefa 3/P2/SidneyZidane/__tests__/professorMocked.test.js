//mocked test
const fs = require("fs");
const path = require("path");
const professorModel = require("../models/professor.js");
const professoresTodos = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, "../models/__mocks__/professor.json"))
);

jest.mock("../models/professor.js");

test("Teste de get Professor By Matricula Mock", () => {
  expect(professorModel.getProfessorByMatricula(202020)).toEqual({
    matricula: 202020,
    nome: "Kinder",
    professor_ID: 3,
  });
});

test("Teste de get Professor Mock", () => {
  expect(professorModel.getProfessores()).toEqual(professoresTodos);
});

test("Criar Professor Mock", () => {
  return professorModel
    .createProfessor({ matricula: "9999999", nome: "teste" })
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

test("Criar Professor Quebrado Mock", () => {
  return professorModel
    .createProfessor({ matricula: "1234568526963652", nome: "teste" })
    .then((data) => {
      expect(data).toEqual({ erro: "Professor não criado" });
    });
});

test("Editar Professor Mock", () => {
  return professorModel
    .updateProfessor(10, { matricula: "9999999", nome: "teste" })
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

test("Editar Professor Quebrado Mock", () => {
  return professorModel
    .updateProfessor(14, {
      matricula: "1234568526963652",
      nome: "teste update",
    })
    .then((data) => {
      expect(data).toEqual({ erro: "Professor não alterado" });
    });
});

test("Editar Professor inexistente Mock", () => {
  return professorModel
    .updateProfessor(15, { matricula: "45678", nome: "teste update" })
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

test("Deletar Professor Mock", () => {
  return professorModel.deleteProfessor(2).then((data) => {
    expect(data).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          affectedRows: 1,
        }),
      ])
    );
  });
});

test("Deletar Professor inexistente Mock", () => {
  return professorModel.deleteProfessor(36).then((data) => {
    expect(data).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          affectedRows: 0,
        }),
      ])
    );
  });
});
