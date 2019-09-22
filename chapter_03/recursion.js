/*
Recursion
Here’s a way to define whether a positive whole number is even or odd:

Zero is even.

One is odd.

For any other number N, its evenness is the same as N - 2.

Define a recursive function isEven corresponding to this description. The function should accept a single parameter (a positive, whole number) and return a Boolean.
*/

function isEven(num) {
  if (num == 0) {
    return true;
  } else if (num == 1) {
    return false;
  } else {
    return isEven(num - 2);
  }
}
