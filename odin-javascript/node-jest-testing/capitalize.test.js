const capitalize = require("./capitalize");

test("'toebeans' becomes 'Toebeans'", () => {
  expect(capitalize("toebeans")).toBe("Toebeans");
});

test("'ASDFASDF' becomes 'ASDFASDF'", () => {
  expect(capitalize("ASDFASDF")).toBe("ASDFASDF");
});

test("'one two three' becomes 'One two three'", () => {
  expect(capitalize("one two three")).toBe("One two three");
});

test("'123' becomes '123'", () => {
  expect(capitalize("123")).toBe("123");
});
