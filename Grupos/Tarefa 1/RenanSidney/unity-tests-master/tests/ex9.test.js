const functions = require("../functions");
const fs = require("fs");

let unity_tests = JSON.parse(fs.readFileSync("test_cases/ex9.json", "utf8"));

unity_tests.forEach((unity_test) => {
  test('Somar os dígitos e informar se é par ou ímpar', () => {
    expect(functions.ex9(unity_test.number)).toBe(unity_test.result);
    
    }
  ); 
}

);