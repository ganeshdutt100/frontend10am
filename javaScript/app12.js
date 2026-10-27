// let a =
//   " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga placeat sequi, fugiat dolore aliquam veniam, libero quidem unde ipsa alias dignissimos similique, expedita consequuntur porro. Laboriosam tempore in ipsum voluptas.";

// console.log(a);
// for (let i = 1; i <= 20; i++) {
//   console.log(i, " : ", a);
// }

// function showDetails() {
//   console.log(a);
// }
//
// showDetails();

// function sum(a, b) {
//   console.log(a + b);
// }
//
// sum(12, 45);
//
// function sum(a, b) {
//   return a + b;
// }
// let output = sum(12, 45);
// console.log(output);

// let outputFun = function () {
//   console.log("Hello world");
// };
// outputFun();

// arrow
// let arrow = (a) => console.log("Hey i am arrow function ", a);
//
// let arrow1 = (a) => {
//   console.log("Hey i am arrow function ", a);
//   console.log("Hey i am arrow function ", a);
//   console.log("Hey i am arrow function ", a);
//   console.log("Hey i am arrow function ", a);
// };
//
// arrow("JS CLASS");

// IIFE
// (function () {
//   console.log("Hello from iife fun");
// })();

// function fun(a, b) {
//   console.log("screen  :  ", a + b);
// }
// function fun1(a, b) {
//   return a + b;
// }
//
// let output = fun1(12, 78);
// console.log(output);

// fun.call(this,arg)
// function fun(name) {
//   console.log("hello : ", name);
// }
// fun.call(null, "Harsh");
// fun("Harsh");

// function std(name, course) {
//   this.name = name;
//   this.course = course;
// }
//
// function weekDays(name, course) {
//   std.call(this, name, course);
// }
// function weekEnd(name, course, profile) {
//   std.call(this, name, course);
//   this.profile = profile;
// }
//
// let weekDayStudent1 = new weekDays("Harsh", "Mern");
// let weekEndStudent1 = new weekEnd("Rahul", "Mern", "Dev");
//
// console.log(weekDayStudent1);
// console.log(weekEndStudent1);

// let arr = [12, 45, 67, 89, 54];
//
// let max = Math.max.apply(this, arr);
// console.log(max);
//
// let min = Math.min.apply(this, arr);
// console.log(min);
//
// let obj = {
//   courseName: "js",
//   getFun: function () {
//     return this.courseName;
//   },
// };
//
// let newCourse = {
//   courseName: "GenAI",
// };
//
// let output1 = obj.getFun;
// let output2 = output1.bind(newCourse);
// console.log(output2());

// let a = 987;
//
// console.log(typeof a.toString());
