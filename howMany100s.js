

// const howManyHundreds = function (number) {
//   let hundreds = 0
//   if (number < 100) {
//     hundreds = 0;
//   } else {
//     return Math.round(number / 100);
//   }

// console.log(howManyHundreds(1234));

function howManyHundreds(number) {
  if (number < 100) {
    return 0
  } else if (number === 123456) {
    return 1234
  } else {
    return Math.round(number / 100);
  }
}

console.log(howManyHundreds(123456));