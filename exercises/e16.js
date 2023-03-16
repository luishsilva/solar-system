// see e16.md

export function find(array, callback) {
  // see e16.md
  let returnArray = [];
  for (let element of array) {
    // Only if the callback that we apply returns something truthy, does it get pushed into the new array
    if (callback(element)) {
      returnArray.push(element);
      // Obs: I don't think the return array is needed in this function since the test is expecting a object
      //return {v: returnArray[0].v, id: returnArray[0].id};
      return element;
    }
  }
  return undefined
}

const values = [
  { v: false, id: 1 },
  { v: true, id: 2 },
  { v: true, id: 3 },
]

function e16(values) {
  if(values.v === true){
    return { v: values.v, id: values.id }
  }
}


find(values, e16)
