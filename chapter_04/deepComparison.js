/*
Deep comparison
The == operator compares objects by identity. But sometimes you’d prefer to compare the values of their actual properties.

Write a function deepEqual that takes two values and returns true only if they are the same value or are objects with the same properties, where the values of the properties are equal when compared with a recursive call to deepEqual.
*/

function deepEqual(val1, val2) {
  if (val1 === val2) return true;
  if (typeof val1 !== typeof val2) return false;
  if (val1 == null || val2 == null) return false;
  const val1Keys = Object.keys(val1);
  const val2Keys = Object.keys(val2);

  for (let key of val1Keys) {
    if (!val2Keys.some(item => item === key)) return false;
    if (!deepEqual(val1[key], val2[key])) return false;
  }

  return true;
}
