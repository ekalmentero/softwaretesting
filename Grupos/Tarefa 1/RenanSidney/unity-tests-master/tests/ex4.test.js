const functions = require("../functions");
const fs = require("fs");

let unity_tests = JSON.parse(fs.readFileSync("test_cases/ex4.json", "utf8"));

unity_tests.forEach((unity_test) => {
  test(
    "Texto: " +
      unity_test.text +
      " \nNúmero para divisão: " +
      unity_test.number +
      "\nResultado: " +
      unity_test.result,
    () => {
      expect(functions.ex4(unity_test.text, unity_test.number)).toBe(
        unity_test.result
      );
    }
  );
});
