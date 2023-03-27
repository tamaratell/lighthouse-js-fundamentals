// let array = [];

// // function range(start, end, step) {
// //   for (i = start; i <= end; i += step) {
// //     return array += array.push(i);
// //   }
// // }

// console.log(array)

// function range() {
//   for (var i = 1; i <= 5; i++)
//     return array += i;
// }

// function range(start, stop, step) {
//   let array = [];
//   for (i = start; i <= stop; i = i + step) {
//     array.push(i);
//   } if (start > stop) {
//     return [];
//   } else if (step < 0) {
//     return [];
//   } else {
//     return array;
//   }
// }

// console.log(range(2, 10, 3));

// var lastIndexOf = function (array, value) {
//   var i;
//   for (i = array.length - 1; i >= 0; i--) {
//     if (array[i] === value) {
//       return i;
//     }
//   }
//   return -1; // standard default value for not found indices
// };

// console.log(lastIndexOf([0, 1, 4, 1, 2], 1));  //  3
// console.log(lastIndexOf([0, 1, 4, 1, 2], 2));  //  4
// console.log(lastIndexOf([0, 1, 4, 1, 2], 42)); // -1

// var lastIndexOf = function (array, value) {
//   var i;
//   for (i = array.length - 1; i >= 0; i--) {
//     if (array[i] === value) {
//       return i;
//     }
//   } return -1;
// };

// console.log(lastIndexOf([0, 1, 4, 1, 2], 1));

function range(start, stop, step) {
  let array = [];
  if (start > stop || step <= 0 || start === undefined || end === undefined || step === undefined) {
    array = []
  }
  else for (let i = start; i <= stop; i = i + step) {
    array.push(i);
  }
  return array;
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));