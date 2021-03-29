"use strict";

/* comment out the node specific code when going to the browser*/
// const assert = require("assert");  //always need this with node
// const myExports = require("./arrayPractice.js");  //with node need the name of your file with your functions here
// const doubleNums = myExports.doubleNums;  //do this for all of the functions used in the Mocha tests
// const doubleAges = myExports.doubleAges;
// const filterEven = myExports.filterEven;
// const filterOver10 = myExports.filterOver10;
// const findEvenNum = myExports.findEvenNum;
// const findEvenAge = myExports.findEvenAge;
// const sumOfNumbers = myExports.sumOfNumbers;
// const averageOfNumbers = myExports.averageOfNumbers;
// const maxOfNumbers = myExports.maxOfNumbers;
// const maxOfAges = myExports.maxOfAges;
// const avgAgeEvenNum = myExports.avgAgeEvenNum;
// const avgAgeoddNum = myExports.avgAgeoddNum;
// const includesEvenAge = myExports.includesEvenAge

let numArray;
let peopleArray;

describe("map practice", function () {
    beforeEach(function () {
        numArray = [5, 0, 7, 77, -20, 300, 51, 2];
        peopleArray = [{ name: "Sam", age: 15 }, { name: "William", age: 6 }, { name: "Lucy", age: 13 }, { name: "Barney", age: 80 }];
    });

    it("doubles an array of numbers", function () {
        assert.deepEqual(doubleNums(numArray), [10, 0, 14, 154, -40, 600, 102, 4]);
        assert.deepEqual(numArray, [5, 0, 7, 77, -20, 300, 51, 2]);  //test for pure function
    });

    it(" it doubles age", function () {
        assert.deepEqual(doubleAges(peopleArray), ['30', '12', '26', '160']);
    });
});
describe("filter practice", function () {
    beforeEach(function () {
        numArray = [5, 0, 7, 77, -20, 300, 51, 2];
        peopleArray = [{ name: "Sam", age: 15 }, { name: "William", age: 6 }, { name: "Lucy", age: 13 }, { name: "Barney", age: 80 }];
    });

    it("filter all even numbers", function () {
        assert.deepEqual(filterEven(numArray), [0, -20, 300, 2]);
        assert.deepEqual(numArray, [5, 0, 7, 77, -20, 300, 51, 2]);  //test for pure function
    });

    it("filter all age > 10", function () {
        assert.deepEqual(filterOver10(peopleArray),
            [{ name: "Sam", age: 15 }, { name: "Lucy", age: 13 }, { name: "Barney", age: 80 }]);
        assert.deepEqual(peopleArray,
            [{ name: "Sam", age: 15 }, { name: "William", age: 6 }, { name: "Lucy", age: 13 }, { name: "Barney", age: 80 }]);
    });

    it("find even", function () {
        assert.strictEqual(findEvenNum(numArray), 0);
        assert.strictEqual(findEvenNum([1, 3, 801]), undefined);
    });
    it("find even age ", function () {
        assert.deepEqual(findEvenAge(peopleArray), { name: 'William', age: 6 });
        const peopleOddAge = [{ name: "Sam", age: 15 }, { name: "Lucy", age: 13 }, { name: "Barney", age: 81 }];
        assert.deepEqual(findEvenAge(peopleOddAge), undefined);
    });

    it("includes even", function () {
        assert.strictEqual(numArray.includes(77), true);
        assert.strictEqual(numArray.includes(15), false);
    });

    /* complete the following similar to includes even test */
    it("includes even age -- write this test");
    /* complete the following similar to includes even test */
    //it("includes even age -- write this test");
    it("includes even", function () {
        assert.strictEqual(numArray.includes(100), false);
        assert.strictEqual(numArray.includes(300), true);
    });

    it("includes even ages", function () {
        assert.strictEqual(includesEvenAge(peopleArray), true);
        const peopleOddAge = [{ name: "Sam", age: 15 }, { name: "Lucy", age: 13 }, { name: "Barney", age: 81 }];
        assert.strictEqual(includesEvenAge(peopleOddAge), false);
    });


});
describe("reduce practice", function () {
    beforeEach(function () {
        numArray = [5, 0, 7, 77, -20, 300, 51, 2];
        peopleArray = [{ name: "Sam", age: 15 }, { name: "William", age: 6 }, { name: "Lucy", age: 13 }, { name: "Barney", age: 80 }];
    });
    it("find sum of numbers", function () {
        assert.strictEqual(sumOfNumbers(numArray), 422);
    });


    it("find average of numbers", function () {
        assert.strictEqual(averageOfNumbers(numArray), 52.75);
    });

    it("find max of numbers", function () {
        assert.strictEqual(maxOfNumbers(numArray), 300);
    });

    it("find max for ages", function () {
        assert.deepEqual(maxOfAges(peopleArray), { name: 'Barney', age: 80 });
    });

    it("find max for ages", function () {
        assert.deepEqual(avgAgeEvenNum(peopleArray), 43);
    });
    it("find max for ages", function () {
        assert.deepEqual(avgAgeoddNum(peopleArray), 14);
    });
})




