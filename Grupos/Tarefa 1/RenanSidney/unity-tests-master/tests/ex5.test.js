const functions = require("../functions");
const fs = require("fs");

let unity_tests = JSON.parse(fs.readFileSync("test_cases/ex5.json", "utf8"));

unity_tests.forEach((unity_test) => {
  test(
    "Entrada: " + unity_test.input + "\nResultado: " + unity_test.result,
    () => {
      expect(functions.ex5(unity_test.input)).toBe(unity_test.result);
    }
  );
});
