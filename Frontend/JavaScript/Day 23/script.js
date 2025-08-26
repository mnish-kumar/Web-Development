// Remove dupilcate numbers in array
// let arr = [1,1,1,1,1,2,2,3,4,4,5,6,7,7,7,8,9,9,9];
// let ans = [...new Set(arr)]






// Find the second largest element in an array
// let arr = [10,2,2,5,5,2,5,85,690,50,9,8];

// let array = [...new Set(arr)];

// var ans = array.sort(function(a , b){
//     return a - b;
// })
// var output = ans[ans.length - 2];

// method -> 2 written style
// let uniqueSorted = [...new Set(arr)].sort(function(a, b) {
//     return a - b;
// });
// console.log(uniqueSorted[uniqueSorted.length - 2]);










// Sort Array in decending Array
// let arr = [10,2,2,5,5,2,5,85,690,50,9,8];

// let ans = arr.sort(function(a , b){
//     return b - a;
// })
// console.log(ans);





// Find the most frequent element in an array.
var arr = [3,4,1,3,4,6,7];

// let obg = {};

// arr.forEach(function(val){
//     obg[val] === undefined ? (obg[val] = 1) : obg[val]++;
// });

arr.sort();
console.log(arr);
