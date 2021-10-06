const functions = require("../functions");
const fs = require("fs");

let unity_tests = JSON.parse(fs.readFileSync("test_cases/ex8.json", "utf8"));

unity_tests.forEach((unity_test) => {
  test('Contar vogais numa string', () => {
    expect(functions.ex8(unity_test.text)).toBe(unity_test.result);
    
    }
  ); 
}
);
