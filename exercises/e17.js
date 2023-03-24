export function minBy(array, cb) {
  return array.reduce((min, current) => {
    return cb(current) < cb(min) ? current : min
  }, array[0]);
}

export function maxBy(array, cb) {
  return array.reduce((max, current) => {
    return cb(current) > cb(max) ? current : max
  }, array[0]);
}