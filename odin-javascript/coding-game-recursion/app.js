function sumRange(n) {
  if (n == 1) {
    return 1;
  } else return n + sumRange(n - 1);
}

//console.log(sumRange(3));

function power(n, p) {
  if (p == 0) return 1;
  else return n * power(n, p - 1);
}
// console.log(power(2, 1));
// console.log(power(2, 2));
// console.log(power(2, 4));

function factorial(n) {
  if (n <= 0) return 1;
  else return n * factorial(n - 1);
}
//console.log(factorial(5));

var allAreLessThanSeven = all([1, 2, 9], function (num) {
  return num < 7;
});

//console.log(allAreLessThanSeven); // false

function all(array, callback) {
  var copy = copy || array.slice(); // shallow copies array

  if (copy.length === 0) return true;

  if (callback(copy[0])) {
    copy.shift(); // remove first element from array
    return all(copy, callback);
  } else {
    return false;
  }
}

var six = productOfArray([1, 2, 3]); // 6
var sixty = productOfArray([1, 2, 3, 10]); // 60

// console.log(six);
// console.log(sixty);
function productOfArray(array) {
  if (array.length === 0) return 1;
  else return array.shift() * productOfArray(array);
}

var nestedObject = {
  data: {
    info: {
      stuff: {
        thing: {
          moreStuff: {
            magicNumber: 44,
            something: "foo2",
          },
        },
      },
    },
  },
};

let hasIt = contains(nestedObject, 44); // true
let doesntHaveIt = contains(nestedObject, "foo"); // false
//console.log(hasIt, doesntHaveIt);
function contains(obj, searchValue) {
  if (typeof obj !== "object" || obj === null) {
    return obj === searchValue;
  }
  for (const value of Object.values(obj)) {
    if (contains(value, searchValue)) {
      return true;
    }
  }
  return false;
}

//#7

var seven = totalIntegers([[[5], 3], 0, 2, ["foo"], [], [4, [5, 6]]]); // 7
//console.log(seven);

function totalIntegers(array) {
  if (array.length === 0) {
    return 0;
  }
  let total = 0;
  let first = array.shift();
  if (Array.isArray(first)) {
    total += totalIntegers(first);
  } else if (Number.isInteger(first)) {
    total += 1;
  }
  return total + totalIntegers(array);
}

//#9
console.log(replicate(3, 5)); // [5, 5, 5]
console.log(replicate(1, 69)); // [69]
console.log(replicate(-2, 6)); // []

function replicate(reps, num) {
  if (reps <= 0) return [];
  else {
    return [num].concat(replicate(reps - 1, num));
  }
}
