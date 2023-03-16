export function minBy(array, cb) {
  return array.reduce((min, current) => {
    return cb(current) < cb(min) ? current : min
  }, array[0])
}

export function maxBy(array, cb) {
  return array.reduce((min, current) => {
    return cb(current) < cb(min) ? current : min
  }, array[0])
}

minBy(
  [
    { name: "jon", age: 29 },
    { name: "peter", age: 10 },
    { name: "andrey", age: 22 },
  ],
  (person) => person.age
);


maxBy(
  [
    { name: "jon", age: 29 },
    { name: "peter", age: 30 },
    { name: "andrey", age: 22 },
  ],
  (person) => person.age
);