"use strict"
// module.exports = { oddValue, myMap, myFilter, multiplyAll, sumValue, myreduce };
/**
 * 
 * @param {number} elem 
 * @returns {number}
 */

function multiplyAll(elem) {
    return elem * elem
}
/**
 * 
 * @param {array} arr 
 * @param {function} multiplyAll 
 * @returns 
 */
function myMap(arr, multiplyAll) {
    let newArr = [];
    for (let key of arr) {
        let result = multiplyAll(key)
        newArr.push(result)
    }
    return newArr;
}
// console.log(myMap([1, 2, 3, 4, 5], multiplyAll))
/**
 * 
 * @param {number} elem 
 * @returns {boolean}
 */

function oddValue(elem) {
    if (elem % 2 !== 0) {
        return true
    } else {
        return false
    }

}
/**
 * 
 * @param {array} arr 
 * @param {function} oddValue 
 * @returns {array}
 */

function myFilter(arr, oddValue) {
    let newArray = [];
    for (let key of arr) {
        if (oddValue(key)) {
            newArray.push(key)
        }

    }
    return newArray;
}
// console.log(myFilter([1, 2, 3, 4, 5, 9, 11, 12], oddValue))


/**
 * 
 * @param {number} a
 * @param {number} b
 */
function sumValue(a, b) {
    return a + b;
}
/**
 * 
 * @param {array} arr
 * @param {numuber} sumValue
 */
function myreduce(arr, sumValue) {
    let sum = 0
    for (let key of arr) {
        sum = sumValue(sum, key)
    }
    return sum
}
