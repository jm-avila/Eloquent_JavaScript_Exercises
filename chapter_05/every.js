/*
Everything
Implement every as a function that takes an array and a predicate function as parameters. Write two versions, one using a loop and one using the some method.
*/

function everyLoop(array, test) {
  for (let item of array) {
    if (!test(item)) return false;
  }
  return true;
}

function everySome(array, test) {
  return !array.some(item => !test(item));
}
