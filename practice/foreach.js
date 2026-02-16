// let soliloquy = "To be, or not to be, that is the question:";
// let a         = Array.from(soliloquy);
// a.forEach(function(element) {
//   console.log(element);
// });

// a.forEach((e) => {
//   console.log(e);
// });

// const comparison = (a, b) => {
//   return a - b;
// }

// let nums = [17, 42, 8, 60, 9];
// console.log(nums.sort(comparison));

const comparison = (a, b) => {
  return a - b;
}

let nums = [17, 42, 8, 60, 9];
nums.sort((a, b) => {
  return a - b
}).forEach((num) => {
  console.log(num);
});