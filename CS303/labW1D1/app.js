"use strict";

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
//module.exports = {maxOfThree, sum, multiply };  //add all of your function names here that you need for the node 
//exports.maxOfThree = maxOfThree;


/**
 * 
 * @param {number} a is a number
 * @param {number} b is a number 
 * @param {number} c is a number
 * @returns {number} largest of a, b, c
 */
function maxOfThree(a, b, c) {
    let maxThr;
    if (a > b && a > c) {
        return maxThr = a;
    } else if (b > a && b > c) {
        return maxThr = b;
    } else {
        return maxThr = c;
    }
}

/**
 * 
 * @param {Array} arr of numbers
 * @returns {number} sum of arr numbers
 */
function sum(arr) {
    let tot = 0;
    for (const element of arr) {
        tot += element;
    }

    return tot;
}

/**
 * 
 * @param {Array} arr of numbers
 * @returns {number} sum of arr numbers
 */
function multiply(arr) {
    let tot = 1;
    for (const element of arr) {
        tot *= element
    }
    return tot;

}
/**
 * 
 * @param {arr} arr it takes array stirings
 * @returns string
 */

function findLongestWord(arr) {
    let longest = 0
    let longestword = ""

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > longest) {
            longest = arr[i].length
            longestword = arr[i]
        }
    }
    return longestword
}

/**
 * 
 * @param {array} arr takes array number
 * @returns {array} reversed array number
 */
function reverseArray(arr) {

    let reverse = []
    for (let i = arr.length - 1; i > 0; i--) {
        reverse.push(arr[i])

    }
    reverse.push(arr[0])
    return reverse;
}

/**
 * 
 * @param {array} arr of numbers 
 * @returns {array} array of numbers
 */
function reverseArrayInPlace(arr) {
    let i = 0;
    let j = arr.length - 1;
    while (i < j) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;

        i++;
        j--
    }
    return arr;
}

/**
 * 
 * @param {array} studAns 
 * @param {array} corrAns 
 * @returns array numbers
 */
function scoreExams(studAns, corrAns) {
    let score = []
    for (let eachAnswer of studAns) {
        let answer = 0
        for (let i = 0; i < eachAnswer.length; i++) {
            if (eachAnswer[i] === corrAns[i])
                answer++;
        }
        score.push(answer)
    }
    return score;
}
