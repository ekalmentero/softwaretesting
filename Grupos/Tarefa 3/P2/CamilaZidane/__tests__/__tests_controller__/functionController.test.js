const FunctionController = require('../../controllers/functionController');

// ---------------------------------------------------TESTES de calcularCRTotal ----------------------------------------------------------------

test('calcularCRTotal (sucesso)', () => {

    return FunctionController.calcularCRTotal('2017390077').then(data => {

        expect(data).toEqual('O seu CR total é igual a 7.33');
  
      });
});

test('calcularCRTotal (matricula com mais de 10 digitos)', () => {
    return expect(FunctionController.calcularCRTotal('201730711117')).rejects.toThrow('A matricula deve conter 10 dígitos')
  })

test('calcularCRTotal (erro matricula com menos de 10 dígitos)', () => {
    return expect(FunctionController.calcularCRTotal('20173077')).rejects.toThrow('A matricula deve conter 10 dígitos')
  })

test('calcularCRTotal ( alunoMatricula = undefined/nulo)', () => {
    return expect(FunctionController.calcularCRTotal()).rejects.toThrow('Dados inválidos')
  
      
  });
// ---------------------------------------------------TESTES de calcularCRPeriodo ----------------------------------------------------------------

test('calcularCRPeriodo (sucesso)', () => {

    return FunctionController.calcularCRPeriodo('2017390077', 2021 , 1).then(data => {

        expect(data).toEqual('O seu CR do periodo 2021.1 é igual a 7.33');
  
      });
});

test('calcularCRPeriodo (matricula com mais de 10 digitos)', () => {
    return expect(FunctionController.calcularCRPeriodo('201730711117', 2021 , 1)).rejects.toThrow('A matricula deve conter 10 dígitos')
  })

test('calcularCRPeriodo (erro matricula com menos de 10 dígitos)', () => {
    return expect(FunctionController.calcularCRPeriodo('20173077', 2021 , 1)).rejects.toThrow('A matricula deve conter 10 dígitos')
  })

test('calcularCRPeriodo (alunoMatricula = undefined/nulo)', () => {
    return expect(FunctionController.calcularCRPeriodo(2021 , 1)).rejects.toThrow('Dados inválidos')
  
      
  }); 

test('calcularCRPeriodo (ano = undefined/nulo)', () => {
    return expect(FunctionController.calcularCRPeriodo('2017390077', 1)).rejects.toThrow('Dados inválidos')
  
      
});

test('calcularCRPeriodo (semestre = undefined/nulo)', () => {
    return expect(FunctionController.calcularCRPeriodo('2017390077', 2021)).rejects.toThrow('Dados inválidos')
  
      
}); 

test('calcularCRPeriodo (todos os campos = undefined/nulo)', () => {
    return expect(FunctionController.calcularCRPeriodo(null)).rejects.toThrow('Dados inválidos')
  
      
  }); 

// ---------------------------------------------------TESTES de calcularMediaDisciplina ----------------------------------------------------------------

test('calcularMediaDisciplina (sucesso)', () => {

    return FunctionController.calcularMediaDisciplina('2017390077', '07').then(data => {

        expect(data).toEqual('7.33');
  
    });
});

test('calcularMediaDisciplina (matricula com mais de 10 digitos)', () => {
    return expect(FunctionController.calcularMediaDisciplina('201730711117', '07')).rejects.toThrow('A matricula deve conter 10 dígitos')
  })

test('calcularMediaDisciplina (erro matricula com menos de 10 dígitos)', () => {
    return expect(FunctionController.calcularMediaDisciplina('20173077', '07')).rejects.toThrow('A matricula deve conter 10 dígitos')
  })

test('calcularMediaDisciplina (turma = undefined/nulo)', () => {
    return expect(FunctionController.calcularMediaDisciplina('2017390077')).rejects.toThrow('Dados inválidos')
  
      
  }); 

test('calcularMediaDisciplina (alunoMatricula = undefined/nulo)', () => {
    return expect(FunctionController.calcularMediaDisciplina('7')).rejects.toThrow('Dados inválidos')
  
      
});
// ---------------------------------------------------TESTES de resultadoFinal ----------------------------------------------------------------

test('resultadoFinal (sucesso)', () => {

    return FunctionController.resultadoFinal('2017390077', '07').then(data => {

        expect(data).toEqual('Você está aprovado');
  
    });
});

test('resultadoFinal (turma = undefined/nulo)', () => {
    return expect(FunctionController.resultadoFinal('2017390077')).rejects.toThrow('Dados inválidos')
  
      
  }); 

test('resultadoFinal (alunoMatricula = undefined/nulo)', () => {
    return expect(FunctionController.resultadoFinal('7')).rejects.toThrow('Dados inválidos')
  
      
});


test('resultadoFinal (matricula com mais de 10 digitos)', () => {
    return expect(FunctionController.resultadoFinal('201730711117', '07')).rejects.toThrow('A matricula deve conter 10 dígitos')
  })

test('resultadoFinal (erro matricula com menos de 10 dígitos)', () => {
    return expect(FunctionController.resultadoFinal('20173077', '07')).rejects.toThrow('A matricula deve conter 10 dígitos')
  })
