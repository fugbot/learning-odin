//merge sort
function mergeSort(array) {
  //base case
  if (array.length < 2) {
    return array;
  } else {
    //split array evenly
    let arrayLength = array.length;
    let halfArrLength = Math.floor(arrayLength / 2);
    let arrayLeft = array.slice(0, halfArrLength);
    let arrayRight = array.slice(halfArrLength, arrayLength);

    //select L subarray

    return merge(mergeSort(arrayLeft), mergeSort(arrayRight));

    //mergeSort(array.slice(halfArrLength, arrayLength));
    // console.log(arrayLeft);
    // console.log(arrayRight);
  }

  //split array as evenly as possible
  //get length,
}

function merge(left, right) {
  let result = [];
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  if (left.length) {
    result.push(left.shift());
  } else {
    result.push(right.shift());
  }
  return result;
}

console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
console.log(mergeSort([105, 79, 100, 110]));
