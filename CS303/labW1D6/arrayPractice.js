


"use strict"
/* eslint-disable */
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
// module.exports = { doubleNums, doubleAges, filterEven, filterOver10, findEvenNum, findEvenAge, includesEvenNum, includesEvenAge }; //add all of your function names here that you need for the node mocha tests


const numArray = [5, 0, 7, 77, -20, 300, 51, 2]
const peopleArray = [{ name: "Sam", age: 15 }, { name: "William", age: 6 }, { name: "Lucy", age: 13 }, {
    name: "Barney", age: 80
}]

function doubleNums(arr) {
    return arr.map(num => num * 2);
}
// console.log(doubleNums(numArray))

function doubleAges(arr) {
    // for (let key in arr) {
    //     if (key === "age") {
    //         arr = arr[key] *= 2
    //     }

    // }

    // return arr
}
// const doub = peopleArray.map(doubleAges)
// doub()
// // console.log(doub)


function filterEven(arr) {

    return arr.filter(x => x % 2 === 0)

}

function filterOver10(arr) {


    return arr.filter(x => x > 10)

}
function findEvenNum(arr) {
    return arr.find(x => x % 2 === 0)

}

function findEvenAge(arr) {
    return arr.find(ele => ele.age % 2 === 0)
}


function includesEvenNum(arr) {
    return arr.includes((ele) => ele % 2 == 0)

}

function includesEvenAge(arr) {
    return arr.include((a) => a.age % 2 == 0)

}