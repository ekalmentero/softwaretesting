const fs = require("fs");
const path = require("path");
const avaliacaoController = require("../controllers/avaliacoesController.js");
const avaliacoesTodosBD = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, "../models/avaliacoesBD.json"))
);
require("iconv-lite").encodingExists("foo");

test("Teste de get Avaliacao By ID Controller", () => {
    return avaliacaoController.getAvaliacaoByID(1).then((data) => {
      expect(data).toEqual({
        avaliacao_ID: 1,
        turma_ID: 1,
        aluno_ID: 1,
        nota: 10,
        peso: 1,
      });
    });
  });
  
  test("Teste de get Todos do Banco de dados Controller", () => {
    return avaliacaoController.getAvaliacoes().then((data) => {
      expect(data).toEqual(avaliacoesTodosBD);
    });
  });
  
  test("Criar Avaliacao Controller", () => {
    return avaliacaoController
      .createAvaliacao({
        avaliacao_ID: 7,
        turma_ID: 2,
        aluno_ID: 3,
        nota: 9,
        peso: 2,
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
  
  test("Criar Avaliacao Quebrada Controller", () => {
    return avaliacaoController
      .createAvaliacao({
        avaliacao_ID: 214748364777777,
        turma_ID: 1,
        aluno_ID: 3,
        nota: 9,
        peso: 2,
      })
      .then((data) => {
        expect(data).toEqual({ erro: "Avaliacao não criada" });
      });
  });
  
  test("Editar Avaliacao Controller", () => {
    return avaliacaoController
      .updateAvaliacao(7, {
        turma_ID: 1,
        aluno_ID: 3,
        nota: 9,
        peso: 2,
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
  
  test("Editar Avaliacao Quebrada Controller", () => {
    return avaliacaoController
      .updateAvaliacao(1, {
        turma_ID: 214748364777777,
        codigo: 12,
        disciplina_ID: 3,
        professor_ID: 2,
        periodo_ID: 4,
      })
      .then((data) => {
        expect(data).toEqual({ erro: "Avaliacao não alterada" });
      });
  });
  
  test("Editar Avaliacao inexistente Controller", () => {
    return avaliacaoController
      .updateAvaliacao(15, {
        turma_ID: 1,
        codigo: 123456,
        disciplina_ID: 2,
        professor_ID: 2,
        periodo_ID: 2,
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
  
  test("Deletar Avaliacao Controller", () => {
    return avaliacaoController.deleteAvaliacao(3).then((data) => {
      expect(data).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            affectedRows: 1,
          }),
        ])
      );
    });
  });
  
  test("Deletar Avaliacao inexistente Controller", () => {
    return avaliacaoController.deleteAvaliacao(36).then((data) => {
      expect(data).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            affectedRows: 0,
          }),
        ])
      );
    });
  });
  