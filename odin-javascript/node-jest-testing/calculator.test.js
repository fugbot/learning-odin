const calculator = require("./calculator");

test("Add - 1+1 is 2", () => {
  expect(calculator.add(1, 1)).toBe(2);
});

test("Subtract - 1-1 is 0", () => {
  expect(calculator.subtract(1, 1)).toBe(0);
});

test("Multiply - 1*1 is 1", () => {
  expect(calculator.multiply(1, 1)).toBe(1);
});

test("Divide - 21/7 is 3", () => {
  expect(calculator.divide(21, 3)).toBe(7);
});
("No division by zero");
test("Divide - no division by zero", () => {
  expect(calculator.divide(21, 0)).toBe("No division by zero");
});
