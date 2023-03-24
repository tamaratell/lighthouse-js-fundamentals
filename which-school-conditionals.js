// The logic should help learners decide which school they should attend. Replace the comment inside the function with your code.

// The function returns one of the following strings, based on the value of age:

// Elementary School if age is below 13
// Secondary School if age is between 13 and 18 (both inclusive)
// Lighthouse Labs in all other cases.

const whichSchool = function (age) {
  if (age >= 13 && age <= 18) {
    return ("Secondary School");
  } else if (age < 13) {
    return ("Elementary School");
  } else {
    return ("Lighthouse Labs");
  }

}

console.log("I am 35. Which school should I go to?");
console.log(whichSchool(35));

var num = 99;

while (/* your stop condition goes here */) {
  // check value of num
  // print lyrics using num
  // don't forget to check pluralization on the last line!
  // decrement num
}