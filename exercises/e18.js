import { data } from "../data/data";

// SPACE DATA EXERCISE 16
// Return the year with the greatest number of Asteroids discoveries
// Return example: 1902

export function getGreatestDiscoveryYear(pData) {
  // Your code goes here...
  // feel free to import your `maxBy` or `minBy` methods from previous lessons
  let discoveredYears = pData.asteroids.map( (asteroid) => asteroid.discoveryYear )
  let arr = []
  pData.asteroids.map( (asteroid) =>{
    arr.push(
      {
        year: asteroid.discoveryYear,
        total : discoveredYears.filter(fYear => fYear == asteroid.discoveryYear).length
      }
    )  
  })
  return maxBy(arr,(year) => year.total ).year;
}

function maxBy(array, cb) {
  return array.reduce((min, current) => {
    return cb(current) > cb(min) ? current : min
  }, array[0])
}

getGreatestDiscoveryYear(data)


// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-16"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
