const caesarCipher = require("./caesarCipher");

test("test wrapping - 'xyz', 3 should return 'abc'", () => {
  expect(caesarCipher("xyz", 3)).toBe("abc");
});

test("case preservation - 'HeLLo', 3 should return 'KhOOr'", () => {
  expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
});

test("punctuation - 'HeLLo', 3 should return 'KhOOr'", () => {
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});

