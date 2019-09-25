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
}
