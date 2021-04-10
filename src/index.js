import emojipedia from "./emojipedia";

const numbers = [3, 56, 2, 48, 5];

//Map - Create a new array by doing something with each item in an array.

const map = numbers.map(function (x) {
  return x * 2;
});
console.log("Map", map);

/*
const newMapArr = [];
numbers.forEach(function (x) {
  newMapArr.push(x * 2);
});
console.log(newMapArr);
*/

//Filter - Create a new array by keeping the items that return true.

const filter = numbers.filter(function (x) {
  return x > 10;
});
console.log("Filter", filter);

/*
const newFilterArr = [];
numbers.forEach(function (x) {
  if (x > 10) {
    newFilterArr.push(x);
  }
});
console.log(newFilterArr);
*/

//Reduce - Accumulate a value by doing something to each item in an array.

var reduce = numbers.reduce(function (accumulator, currentNumber) {
  // console.log("accumulator = " + accumulator);
  // console.log("currentNumber = " + currentNumber);
  return accumulator + currentNumber;
});
console.log("Reduce", reduce);

/*
var newReduceNum = 0;
numbers.forEach(function(x) {
  newReduceNum += x;
});
console.log(newReduceNum);
*/

//Find - find the first item that matches from an array.

const find = numbers.find(function (x) {
  return x > 10;
});
console.log("Find", find);

//FindIndex - find the index of the first item that matches.

const findIndex = numbers.findIndex(function (x) {
  return x > 10;
});
console.log("FindIndex", findIndex);

/////////////// Challenge ///////////////
const emojiMeanings = emojipedia.map(function (eachEmoji) {
  return eachEmoji.meaning.substring(0, 100);
});
console.log(emojiMeanings);
