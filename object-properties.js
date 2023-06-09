// const example = {
//   pizza: 'yummy'
// }

// // console.log(example['food'])

// const food = {
//   types: 'only pizza'
// }

// console.log(food['types']);

// The above code will print the string 'yummy' to the terminal.  

// Alternately, you can use dot notation to get identical results:  

// example.pizza

// example['pizza']

// The two lines of code above will both return yummy.  

const smartGarbage = (trash, bins) => {
  switch (trash) {
    case 'waste':
      bins['waste']++
      break;
    case 'recycling':
      bins['recycling']++
      break;
    case 'compost':
      bins['compost']++
      break;
  }
  return bins
}