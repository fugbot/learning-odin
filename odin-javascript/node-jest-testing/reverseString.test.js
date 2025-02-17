const reverseString = require("./reverseString");

test("'toebeans' becomes 'snaebeot'", () => {
  expect(reverseString("toebeans")).toBe("snaebeot");
});
test("'Hello' becomes 'olleH'", () => {
  expect(reverseString("Hello")).toBe("olleH");
});
test("'Bring back the' becomes 'eht kcab gnirB'", () => {
  expect(reverseString("Bring back the")).toBe("eht kcab gnirB");
});
