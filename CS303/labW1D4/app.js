"use strict";
// const prompt = require("prompt-sync")();
// // Q1.Sum numbers from the visitor.

// let num1 = parseFloat(prompt("enter first number:", ""));
// let num2 = parseFloat(prompt("enter second number:", ""));
// console.log(num1 + num2);

// // Q2.Repeat until the input is a number

// /**//
//  * Read number from the user.
//  * @returns {number} Display number
//  */
// function readNumber() {
//     let num;

//     do {
//         num = prompt("Enter a number please?", 0);
//     } while (!isFinite(num));

//     if (num === null || num === " ") return null;

//     return +num;
// }

// console.log(`Read: ${readNumber()}`);



// // Q3.An occasional infinite loop.
// let i = 0;
// while (i < 11) {
//     i += 0.2;
//     if (i > 9.8 && i < 10.2)
//         console.log(i);
// }


// //A random number from min to max
// /**
//  * Display random number.
//  * @param {Number} min input minimum number
//  * @param {Number} max input max number
//  * @returns {Number} Random number
//  */
// function randomNum(min, max) {
//     return min + Math.random() * (max - min);
// }

// // console.log(randomNum(1, 5));

// //////////////////////////A random integer from min to max
// /**
//  * Display random integer.
//  * @param {Number} min input minimum number
//  * @param {Number} max input max number
//  * @returns {Number} Random integer
//  */
// function randomInt(min, max) {

//     let rand = min + Math.random() * (max + 1 - min);
//     return Math.floor(rand);
// }

// console.log(randomInt(1, 3));


//////////////////////////Uppercase the first character.
/**
 * string with first uppercase letter.
 * @param {String} str input string
 * @returns {string} string with first uppercase letter
 */
function ucFirst(str) {
    if (!str) return str;
    if (str === "") return "";

    return str[0].toUpperCase() + str.slice(1);
}

// console.log(ucFirst("programming"));


/**
 * 
 * @param {String} str input string
 * @returns {boolean} true or false value
 */
function checkSpam(str) {
    let toLow = str.toLowerCase();

    return toLow.includes("viagra") || toLow.includes("xxx");
}

// console.log(checkSpam("buy ViAgRA now"));

/**
 * it display truncated text.
 * @param {string} str input text
 * @param {Number} maxlength input maximum text length
 * @returns {string} truncated text
 */
function truncate(str, maxlength) {
    return (str.length > maxlength) ?
        str.slice(0, maxlength - 1) + "…" : str;
}
// console.log(truncate("Addisalem", 6));

///////////////////////////////////Extract the money
/**
 * Display extracted value
 * @param {String} str input string
 * @returns {Number} Extracted value
 */
function extractCurrencyValue(str) {
    return +str.slice(1);
}
// console.log(extractCurrencyValue("$50"));//50

/**
 * Display the contiguous subarray of arr with the maximal sum of items
 * @param {object} arr input array of numbers.
 * @returns {Number} return the contiguous subarray of arr with the maximal sum of items
 */
function getMaxSubSum(arr) {
    let maxSum = 0;
    let partialSum = 0;

    for (let item of arr) {
        partialSum += item;
        maxSum = Math.max(maxSum, partialSum);
        if (partialSum < 0) partialSum = 0; // zero if negative
    }

    return maxSum;
}

// console.log(getMaxSubSum([-1, 1, 3, -2])); 

//Translate border-left-width to borderLeftWidth
/**
 * Display translated string
 * @param {string} str input string text.
 * @returns {string} return translated string
 */
function camelize(str) {
    return str.split("-").map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)).join("");
}

//console.log(camelize("background-image"));//backgroundImage
