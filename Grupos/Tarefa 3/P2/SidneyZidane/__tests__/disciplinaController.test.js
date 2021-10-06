const fs = require("fs");
const path = require("path");
const disciplinaController = require("../controllers/disciplinasController.js");
const disciplinaTodosBD = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, "../models/disciplinasBD.json"))
);
require("iconv-lite").encodingExists("foo");

test("Teste de get Disciplina By Codigo do Banco de dados Controller", () => {
  return disciplinaController.getDisciplinaByCodigo(172839).then((data) => {
    expect(data).toEqual({
      disciplina_ID: 1,
      codigo: 172839,
      nome: "teste update",
    });
  });
});

test("Teste de get Todos do Banco de dados Controller", () => {
  return disciplinaController.getDisciplinas().then((data) => {
    expect(data).toEqual(disciplinaTodosBD);
  });
});

test("Criar Disciplina Controller", () => {
  return disciplinaController
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

test("Criar Disciplina Quebrado Controller", () => {
  return disciplinaController
    .createDisciplina({ codigo: "1234568526963652", nome: "teste" })
    .then((data) => {
      expect(data).toEqual({ erro: "Disciplina não criada" });
    });
});

test("Editar Disciplina Controller", () => {
  return disciplinaController
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

test("Editar Disciplina Quebrado Controller", () => {
  return disciplinaController
    .updateDisciplina(1, {
      codigo: "1234568526963652",
      nome: "teste update",
    })
    .then((data) => {
      expect(data).toEqual({ erro: "Disciplina não alterada" });
    });
});

test("Editar Disciplina inexistente Controller", () => {
  return disciplinaController
    .updateDisciplina(256, { matricula: "256", nome: "teste update" })
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

test("Deletar Disciplina Controller", () => {
  return disciplinaController.deleteDisciplina(29).then((data) => {
    expect(data).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          affectedRows: 1,
        }),
      ])
    );
  });
});

test("Deletar Disciplina inexistente Controller", () => {
  return disciplinaController.deleteDisciplina(2).then((data) => {
    expect(data).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          affectedRows: 0,
        }),
      ])
    );
  });
});
