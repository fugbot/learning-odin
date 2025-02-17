function analyzeArray(array) {
  const min = Math.min(...array);
  const max = Math.max(...array);
  const length = array.length;

  let sum = 0;
  for (let i = 0; i < length; i++) {
    sum += array[i];
  }
  const average = sum / length;

  return {
    average: average,
    min: min,
    max: max,
    length: length,
  };
}

module.exports = analyzeArray;
