


"use strict"
/* eslint-disable */
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
// module.exports = { doubleNums, doubleAges, filterEven, filterOver10, findEvenNum, findEvenAge, includesEvenNum, includesEvenAge, sumOfNumbers, averageOfNumbers, maxOfNumbers, maxOfAges, avgAgeEvenNum, avgAgeoddNum };
// //add all of your function names here that you need for the node mocha tests
// averageOfNumbers, maxOfNumbers, maxOfAges, avgAgeEvenNum, avgAgeoddNum,includesEvenAge

// const numArray = [5, 0, 7, 77, -20, 300, 51, 2]
// const peopleArray = [{ name: "Sam", age: 15 }, { name: "William", age: 6 }, { name: "Lucy", age: 13 }, {
//     name: "Barney", age: 80
// }]

function doubleNums(arr) {
    return arr.map(num => num * 2);
}
// console.log(doubleNums(numArray))

function doubleAges(arr) {
    return arr.map(age => `${age.age * 2}`)
}

let test = doubleAges(peopleArray)
console.log(test)


function filterEven(arr) {

    return arr.filter(x => x % 2 === 0)

}

function filterOver10(arr) {


    return arr.filter(arr => arr.age > 10)

}
function findEvenNum(arr) {
    return arr.find(x => x % 2 === 0)

}

function findEvenAge(arr) {
    return arr.find(age => age.age % 2 === 0)
}


function includesEvenNum(arr) {
    return arr.include((ele) => ele % 2 === 0)

}

function includesEvenAge(arr) {
    return arr.includes(age => age.age % 2 === 0)

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
// let test44 = avgAgeoddNum(peopleArray)
// console.log(test44)