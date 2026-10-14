// let i = 1;
// while (i <= 10) {
//   console.log(i);
//   i++;
// }

// let i = 10;
// do {
//   console.log(i);
//   i++;
// } while (i >= 20);

// in and of

// let arr = [1, 2, 3, 4, 5, 6, 7];
// for (let i in arr) {
//   console.log(i);
// }
//
// for (let i of arr) {
//   console.log(i);
// }
// while  1 to 5

let a = 12345;
// let sum = 0;
let reverse = 0;
while (a > 0) {
  let digit = a % 10;
  // sum = sum + digit;
  reverse = reverse * 10 + digit;
  sum = digit;
  console.log(sum);
  a = Math.floor(a / 10);
}

console.log(reverse);
// Write a program to calculate the sum of even digits in 123456. Output: 12.

// 12345 / 10   = 1234.5(Math.floor) =  1234
