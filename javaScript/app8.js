console.log("Student data  ");
// let a1 = "rahul";
// let a2 = "ashish";
// let a3 = "keshav";

let studentData = ["rahul", "ashish", "keshav"];
studentData[3] = "Nandini";
// console.log(studentData);
// console.log(studentData[1]);
for (let i = 0; i < studentData.length; i++) {
  console.log(i, studentData[i]);
}

for (let x of studentData) {
  console.log(x);
}

let value = [11, 22, 33, 44, 5, 66, 5];
// Find the Largest Number
// Write a program to find the largest number in an array without using the Math.max() method.

// Write a JavaScript program to reverse an array without using the reverse() method.

// Write a program to check whether the number 30 exists in the array. Do not use the includes() method.

// Write a program to remove duplicate values from the given array

// Write a program to find the second-largest number in an array without using the sort() method.

let sum = 0;
for (let i = 0; i < value.length; i++) {
  //   console.log(i, value[i]);
  sum = value[i] + sum;
}
console.log(sum);
