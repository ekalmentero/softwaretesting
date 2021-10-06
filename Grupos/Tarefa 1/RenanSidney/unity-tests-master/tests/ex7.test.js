const functions = require("../functions");
const fs = require("fs");

let unity_tests = JSON.parse(fs.readFileSync("test_cases/ex7.json", "utf8"));

unity_tests.forEach((unity_test) => {
  test(
    "Array 1: " +
      unity_test.arr +
      "\nArray 2: " +
      unity_test.arr2 +
      "\nResultado: " +
      unity_test.result,
    () => {
      expect(functions.ex7(unity_test.arr, unity_test.arr2)).toEqual(
        unity_test.result
      );
    }
  );
});
