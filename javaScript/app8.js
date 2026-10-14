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

let value = [11, 22, 33, 44, 5, 66];

for (let i = 0; i < value.length; i++) {
  console.log(i, value[i]);
}
