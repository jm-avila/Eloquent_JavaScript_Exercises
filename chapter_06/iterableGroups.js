/*
Iterable groups
Make the Group class from the previous exercise iterable.

If you used an array to represent the group’s members, don’t just return the iterator created by calling the Symbol.iterator method on the array. That would work, but it defeats the purpose of this exercise.

It is okay if your iterator behaves strangely when the group is modified during iteration.
*/

/*
Write a class called Group (since Set is already taken). Like Set, it has add, delete, and has methods. Its constructor creates an empty group, add adds a value to the group (but only if it isn’t already a member), delete removes its argument from the group (if it was a member), and has returns a Boolean value indicating whether its argument is a member of the group.

Use the === operator, or something equivalent such as indexOf, to determine whether two values are the same.

Give the class a static from method that takes an iterable object as argument and creates a group that contains all the values produced by iterating over it.
*/

class Group {
  constructor() {
    this.group = [];
  }

  has(val) {
    return this.group.includes(val);
  }

  add(val) {
    if (!this.group.includes(val)) {
      this.group.push(val);
    }
  }

  delete(val) {
    const valIndex = this.group.indexOf(val);
    if (valIndex !== -1) {
      this.group.splice(valIndex, 1);
    }
  }

  static from(arr) {
    const holderValue = new Group();
    arr.forEach(item => holderValue.add(item));
    return holderValue;
  }

  [Symbol.iterator]() {
    return new Iteratable(this);
  }
}

class Iteratable {
  constructor(iterated) {
    this.iterated = iterated;
    this.index = 0;
  }

  next() {
    if (this.index >= this.iterated.group.length) {
      return { done: true };
    } else {
      let result = {
        value: this.iterated.group[this.index],
        done: false
      };
      this.index++;
      return result;
    }
  }
}
