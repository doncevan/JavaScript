/*
 * Programming Quiz: Laugh it Off 2
 *
 * QUIZ REQUIREMENTS
 * - Your code should have a `laugh()` function
 * - Your `laugh()` function should have one parameter named `num`
 * - Your `laugh()` function should return a string with `num` number of `"ha"`s.
 * - The string should end with an exclamation point.
 */

// your code goes here
function laugh(num) {
  if (num === 0) {
    return "";
  }
  let laughter = "";
  for (let i = 0; i < num; i++) {
    laughter += "ha";
  }
  return laughter + "!";
}

// test code
console.log(laugh(0));
console.log(laugh(3));
console.log(laugh(4));
console.log(laugh(8));
