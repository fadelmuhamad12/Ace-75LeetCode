
const array = [31, 9, 54, 11, 43, 6, 67];

let min = array[0];
let max = 0;

function maxMin(array) {
  for (let i = 0; i < array.length; i++) {
    if (min < array.length) {
      min = array.length;
    }
    if (max < array.length) {
      max = array.length;
    }
    return max;
  }
  return min;
  
}

console.log("Min", +min);
console.log("Max", +max);
