const functions = require("../functions");
const fs = require("fs");

let unity_tests = JSON.parse(fs.readFileSync("test_cases/ex3.json", "utf8"));

unity_tests.forEach((unity_test) => {
  test(
    "Texto: " + unity_test.text + "\nResultado: " + unity_test.result,
    () => {
      expect(functions.ex3(unity_test.text)).toBe(unity_test.result);
    }
  );
});
