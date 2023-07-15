// const kidsWithCandies = (candies, extraCandies) => {
//     const highest = Math.max(...candies); // Ini buat nentuin nilai tertinggi anak yg punya candies
//     let result = []; // untuk menyimpan hasil nnti

//     for(let i = 0; i < candies.length; i++){
//         let candy = candies[i]; 1 // candy nyimpen candies anak index ke i

//         result.push(candy + extraCandies >= highest); //1 + 3 >=5
//     }

//     return result;
// };

// console.log(kidsWithCandies([4,2,1,1,2], 2));

var kidsWithCandies = function (candies, extraCandies) {
  let highest = 0; //8
  let result = [];

  for (let i = 0; i < candies.length; i++) {
    if (candies[i] > highest) {
      highest = candies[i];
    }
  }
  for (let i = 0; i < candies.length; i++) {
    let candy = candies[i]; // index 0 = 2 || index 1 = 8 || index 2 = 7
    result.push(candy + extraCandies >= highest); // result 0 = 2 + 1 >= 8 ? False ||  result 1 = 8 + 1 >= 8 ? True || result 3 = 7 + 1 >=8 ? True
  }

  return result;
};

console.log(kidsWithCandies([2, 8, 7], 1));
