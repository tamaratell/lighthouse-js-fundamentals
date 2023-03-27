const moves = ['north', 'north', 'west', 'west', 'north', 'east', 'north']



const finalPosition = function (moves) {
  let initialPosition = [0, 0];
  for (const move of moves) {
    if (move === "north") {
      initialPosition[1] += 1;
    } else if (move === "south") {
      initialPosition[1] -= 1;
    } else if (move === "east") {
      initialPosition[0] += 1;
    } else if (move === "west") {
      initialPosition[0] -= 1;
    }
  } return initialPosition;
}

console.log(finalPosition(moves));