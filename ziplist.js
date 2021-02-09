// eslint-disable-next-line max-len
// Write a function called zipList that accepts two lists of equal length and returns the result of alternating taking elements. For example: given the two lists [‘a’, ‘b’, ‘c’] and [1, 2, 3], the function should return [‘a’, 1, ‘b’, 2, ‘c’, 3]. zipList should not use Underscore
const arr1 = ['a', 'b', 'c'];
const arr2 = [1, 2, 3];
function zipList(one, two) {
  const alter = [];
  for (let i = 0; i < one.length; i++) {
    alter.push(one[i], two[i]);

  }
  return alter;
}
console.log(zipList(arr1, arr2));

// Now write a function called zipListTheSimpleWay that does the same thing using Underscore.
function zipListTheSimpleWay(one, two) {
  let alter;
  alter = _.zip(one, two);
  alter = _.flatten(alter);
  return alter;
}
console.log(zipListTheSimpleWay(arr1, arr2));
