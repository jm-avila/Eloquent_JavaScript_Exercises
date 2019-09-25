/*
A list
A list is a nested set of objects, with the first object holding a reference to the second, the second to the third, and so on.

let list = {
  value: 1,
  rest: {
    value: 2,
    rest: {
      value: 3,
      rest: null
    }
  }
};

Write a function arrayToList that builds up a list structure like the one shown when given [1, 2, 3] as argument. Also write a listToArray function that produces an array from a list. Then add a helper function prepend, which takes an element and a list and creates a new list that adds the element to the front of the input list, and nth, which takes a list and a number and returns the element at the given position in the list (with zero referring to the first element) or undefined when there is no such element.

Also write a recursive version of nth.
*/

function arrayToList(arr) {
  let list = null;
  for (let item of arr) {
    list = { value: item, rest: list };
  }
  return list;
}

function listToArray(obj) {
  let arr = [];
  function loopObj(obj) {
    arr.push(obj.value);
    if (obj.rest) loopObj(obj.rest);
    else return;
  }
  loopObj(obj);
  return arr;
}

function prepend(val, list) {
  return { val, list };
}

function nth(list, num) {
  if (!list) return;
  if (num == 0) return list.value;
  return nth(list.rest, num - 1);
}
