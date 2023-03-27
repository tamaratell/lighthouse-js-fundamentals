

// const sumLargestNumbers = function (data) {
//   let biggest = data[0];
//   let secondBiggest = data[1];

//   if (biggest > secondBiggest) {
//     biggest = data[0];
//     secondBiggest = data[1];
//   } else {
//     secondBiggest = data[0];
//     biggest = data[1];
//   }

//   for (let i = 2; i < data.length; i++) {
//     if (data[i] > biggest) {
//       secondBiggest = biggest;
//       biggest = data[i];
//     }
//   }
//   return biggest + secondBiggest;
// }

// console.log(sumLargestNumbers([1, 10]));
// console.log(sumLargestNumbers([1, 2, 3]));
// console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));



// const conditionalSum = function (values, condition) {
//   if (values.length === 0) return 0;

//   let i = 0;
//   let sum = 0;

//   while (i < values.length) {
//     if (condition === 'even' && values[i] % 2 === 0) {
//       sum += values[i];
//     } else if (condition === 'odd' && values[i] % 2 === 1) {
//       sum += values[i];
//     }
//     i++;
//   }

//   return sum;
// };

// console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
// console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
// console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
// console.log(conditionalSum([], "odd"));



// const instructorWithLongestName = function (instructors) {
//   let longestName = "";
//   let index = -1;
//   let object;
//   for (let i = 0; i < instructors.length; i++) {
//     let nameLength = instructors[i].name;
//     if (longestName.length < nameLength.length) {
//       longestName = nameLength;
//       index = longestName.indexOf(longestName[i]);
//       object = instructors[index];
//     }
//   }
//   return object;
// };
// console.log(instructorWithLongestName([
//   { name: "Samuel", course: "iOS" },
//   { name: "Jeremiah", course: "Web" },
//   { name: "Ophilia", course: "Web" },
//   { name: "Donald", course: "Web" }
// ]));
// console.log(instructorWithLongestName([
//   { name: "Matthew", course: "Web" },
//   { name: "David", course: "iOS" },
//   { name: "Domascus", course: "Web" }
// ]));

// const urlEncode = function(text) {
//   // Put your solution here
// };



// Expected Output
// Lighthouse%20Labs
// Lighthouse%20Labs
// blue%20is%20greener%20than%20purple%20for%20sure

// */

// const urlEncode = function (text) {
//   //Put your solution here
//   const regex = /\s+/g;
//   return text.replace(regex, '%20');
// };

// console.log(urlEncode("Lighthouse Labs"));
// console.log(urlEncode(" Lighthouse Labs "));
// console.log(urlEncode("blue is greener than purple for sure"));

// let whereCanIPark = function (spots, vehicle) {
//   for (let y = 0; y < spots.length; y++) {
//     for (let x = 0; x < spots[y].length; x++) {
//       if (vehicle === 'regular') {
//         if (spots[y][x] === 'R') {
//           return [x, y];
//         }
//       } else if (vehicle === 'small') {
//         if (spots[y][x] === 'S' || spots[y][x] === 'R') {
//           return [x, y];
//         }
//       } else if (vehicle === 'motorcycle') {
//         if (spots[y][x] === 'R' || spots[y][x] === 'S' || spots[y][x] === 'M') {
//           return [x, y];
//         }
//       }
//     }
//   }
//   return false;
// }



// console.log(whereCanIPark(
//   [
//     // COLUMNS ARE X
//     // 0    1    2    3    4    5
//     ['s', 's', 's', 'S', 'R', 'M'], // 0 ROWS ARE Y
//     ['s', 'M', 's', 'S', 'r', 'M'], // 1
//     ['s', 'M', 's', 'S', 'r', 'm'], // 2
//     ['S', 'r', 's', 'm', 'r', 'M'], // 3
//     ['S', 'r', 's', 'm', 'r', 'M'], // 4
//     ['S', 'r', 'S', 'M', 'M', 'S']  // 5
//   ],
//   'regular'
// ));

// console.log(whereCanIPark(
//   [
//     ['M', 'M', 'M', 'M'],
//     ['M', 's', 'M', 'M'],
//     ['M', 'M', 'M', 'M'],
//     ['M', 'M', 'r', 'M']
//   ],
//   'small'
// ));

// console.log(whereCanIPark(
//   [
//     ['s', 's', 's', 's', 's', 's'],
//     ['s', 'm', 's', 'S', 'r', 's'],
//     ['s', 'm', 's', 'S', 'r', 's'],
//     ['S', 'r', 's', 'm', 'r', 's'],
//     ['S', 'r', 's', 'm', 'R', 's'],
//     ['S', 'r', 'S', 'M', 'm', 'S']
//   ],
//   'motorcycle'
// ))

const checkAir = function (samples, threshold) {
  let count = samples.filter(i => {
    return i !== 'clean'
  });

  if ((count.length / samples.length) < threshold) {
    return 'Clean';
  } else return 'Polluted';
};

console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
));

console.log(checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
));

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
))

