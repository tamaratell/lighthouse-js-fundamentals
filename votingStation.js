// We'll write a chooseStations(stations) function that takes in an array of possible voting stations, and then only returns the names of the stations that are appropriate.

const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

function chooseStations(stations) {
  const goodStations = [];
  for (const station of stations) {
    const capacity = station[1];
    const venue = station[2];
    if (capacity >= 20) {
      if (venue === "school" || venue === "community centre") {
        goodStations.push(station[0]);
      }
    }
  }
  return goodStations;
}

console.log(chooseStations(stations));