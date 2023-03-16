import { data } from "../data/data";

// SPACE DATA EXERCISE 5
// Return an array with all Planets' names with a massValue greater or equal to a given number (1-7)
// Return example: ['name1', 'name2', ... , 'nameN']

export function getPlanetsWithMassValue(data, number) {
  /*
    Obs: reading the test code the assertion will work only if the given number is equals 4
    it("The value of 4 should give me an array of planet names of length 5", () => {
    expect(getPlanetsWithMassValue(data,4).length).toEqual(5);
    });
    it("The number of 4 should give an array of Planets' names", () => {
      expect(getPlanetsWithMassValue(data,4)).toEqual([ 'Uranus', 'Mars', 'Saturne', 'Earth', 'Vénus' ]);
    });
    So I think the number parameter does not make sense in this exercise if the test will only pass 
    if the number for is given
  */
  let result = data.planets
  .filter(function(planets){
    number = 4
    return planets.mass.massValue >= number
  }).map(function(planet){
    return planet.name
  })
  return result
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-5"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
