"use strict"
/* eslint-disable */
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
module.exports = { doubleNums, doubleAges, filterEven, filterOver10, findEvenNum, findEvenAge, sumOfNumbers, averageOfNumbers, maxOfNumbers, maxOfAges, avgAgeEvenNum, avgAgeoddNum, includesEvenNum, includesEvenAge };
//add all of your function names here that you need for the node mocha tests


function doubleNums(arr) {
  return arr.map(num => num * 2);
}

// function doubleAges(arr){
//   return arr.map(element=> element.age*2);
// }

function doubleAges(arr) {

  let resu = arr.map(item => ({ name: item.name, age: item.age * 2 }))
  return resu
}


function filterEven(arr) {
  return arr.filter(num => num % 2 === 0);
}

function filterOver10(arr) {
  return arr.filter(element => element.age > 10);

}

function findEvenNum(arr) {

  return arr.find(element => element % 2 === 0);

}

function findEvenAge(arr) {
  return arr.find(element => element.age % 2 == 0)
}

function includesEvenNum(arr) {
  return arr.include(element => element % 2 === 0)
}

function includesEvenAge(arr) {
  let even = arr.map(user => user.age % 2 === 0 ? true : false);

  return even.includes(true);
}




//reduce part
function sumOfNumbers(arr) {

  return arr.reduce((tot, age) => tot + age, 0)

}

function averageOfNumbers(arr) {
  let x = arr.reduce((tot, num) => tot + num, 0)
  return x / arr.length

}



function maxOfNumbers(arr) {

  return arr.reduce((a, b) => a > b ? a : b)

}


function maxOfAges(arr) {
  return arr.reduce((a, b) => a.age > b.age ? a : b)


}


function avgAgeEvenNum(arr) {
  let ages = arr.filter(age => age.age % 2 === 0)

  let chained = arr.map(age => age.age)
    .filter(age => age % 2 === 0)
    .reduce((tot, age) => tot + age, 0)
  return chained / ages.length//86/2
}


function avgAgeoddNum(arr) {
  let oddages = arr.filter(age => age.age % 2 !== 0)

  let chained = arr.map(age => age.age)
    .filter(age => age % 2 !== 0)
    .reduce((tot, age) => tot + age, 0)
  // console.log(oddages)//[ { name: 'William', age: 6 }, { name: 'Barney', age: 80 } ]
  return chained / oddages.length//28/2=14

}