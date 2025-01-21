function isEven(val){
    return (val % 2 == 0)
}


const arr = [1, 2, 3, 4, 5];
arr.filter((num) => num % 2 === 0).map((num) => num * 3).reduce((total, currentItem) => total + currentItem);