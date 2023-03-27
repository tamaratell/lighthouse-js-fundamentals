// const sayHello = function () {
//   console.log("Hello, world");
// }

// sayHello();

// const sayHello = function (name) {
//   console.log("Hello, " + name);
// }

// console.log(sayHello("Tamara"));

const returnSayHello = function (name) {
  return "Hello, " + name;
}
const greeting = returnSayHello('John');

console.log(greeting);