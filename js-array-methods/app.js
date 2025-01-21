// function camelize(str){
//     return str
//         .split('-')
//         .map()

// }

// camelize("background-color") == 'backgroundColor';
// camelize("list-style-image") == 'listStyleImage';
// camelize("-webkit-transition") == 'WebkitTransition';

// function filterRange(arr, a, b){
//     return arr
//         .filter(num => num>=a || num<=b)
// }

// function filterRangeInPlace(arr, a, b){
//     return arr
//         .filter()
// }

function Calculator(){
   this.methods = {
        "-": (a, b) => a-b,
        "+": (a, b) => a+b
   } 

   this.calculate = function(str) {
      return this.methods(a,b);
   }
}

let calc = new Calculator;

console.log( calc.calculate("3 + 7") ); // 10