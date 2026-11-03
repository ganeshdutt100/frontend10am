// let obj1 = {
//   userName: "Ashish",
//   age: 23,
//   course: "mernStack",
// };
//
// let obj2 = {
//   name: "Keshav",
//   age: 23,
//   course: "mernStack",
// };
//
// let result = Object.assign(obj1, obj2);
// console.log(result);
//
// let obj1 = {
//   fun: function () {
//     console.log("good morning");
//   },
// };
//
// let output = Object.create(obj1);
//
// output.name = "Nandini";
// output.age = 23;
//
// console.log(obj1.name);

let obj = {
  name: "Harsh",
  age: 23,
};

console.log(Object.values(obj));
console.log(Object.keys(obj));

//
// let obj2 = Object.freeze(obj);
// Object.seal(obj);
// obj.course = "mernStack";
// obj.age = 22;
// console.log(obj.name, obj.course);
// console.log(Object.isFrozen(obj));
// console.log(Object.isExtensible(obj));
// console.log(Object.isSealed(obj));

// console.log(Object.is(5, 5));
// console.log(Object.is({}, {}));
// console.log(Object.is([], []));
