function caesarCipher(string, shift) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  shift = shift % 26;
  if (typeof shift != "number") {
    return "shiftDegree must be a number";
  }
  if (typeof string != "string") {
    return "inputText must be string";
  }
  if (shift > 26 || shift < -26) {
    return "use a shift between -26 and 26";
  }
  const str = string.toLowerCase();
  let result = "";

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    let currentIndex = alphabet.indexOf(char);
    let newIndex = currentIndex + shift;
    if (newIndex > 25) {
      newIndex -= 26;
    }
    if (newIndex < 0) {
      newIndex += 26;
    }
    if (char === " " || !/[a-z]/.test(char)) {
      result += char;
    } else if (string[i] === string[i].toUpperCase()) {
      result += alphabet[newIndex].toUpperCase();
    } else {
      result += alphabet[newIndex];
    }
  }

  return result;
}

module.exports = caesarCipher;
