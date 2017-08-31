//function that will copy an object input that is not passed by reference, this will allow the new object to be changed without mutating the original object
const deepClone = (originalObj) => {
  let newObj = {}
  newObj = JSON.parse(JSON.stringify(originalObj))
  return newObj
}

//exporting function for testing purposes
module.exports = deepClone
