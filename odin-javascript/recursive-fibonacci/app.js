console.log("hello");

function fibs(n) {
  let arr = [];
  let fibNum = 0;
  for (let i = 1; i < n; i++) {
    if (arr.length <= 0) {
      arr.push(fibNum);
      fibNum++;
      arr.push(fibNum);
    } else {
      //let lastNum = arr[arr.length - 1];
      fibNum = arr[arr.length - 2] + arr[arr.length - 1];
      arr.push(fibNum);
    }
  }
  return arr;
}
// console.log(fibs(3));
// console.log(fibs(8));

function fibsRec(n) {
  if (n == 0) {
    return [];
  }
  if (n == 1) {
    return [0];
  }
  if (n == 2) {
    return [0, 1];
  } else {
    const prevFib = fibsRec(n - 1);
    const nextFib = prevFib[prevFib.length - 2] + prevFib[prevFib.length - 1];
    prevFib.push(nextFib);

    return prevFib;
  }
  //arr.push(fibNum);
}
console.log(fibsRec(5));
