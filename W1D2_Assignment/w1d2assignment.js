"use strict"
const prompt=require("prompt-sync")();

// console.log("Answer for question 1")

let volQuart=+prompt("please enter quart in number  ");
let volLitter=volQuart*0.946353
console.log(volQuart+" quart is "+volLitter+" litter")



// console.log("Answer for question 2")

let distanceKm=+prompt("please provide distance value in km")
let miles=distanceKm*0.621371;
console.log(distanceKm+"km is "+miles)
// Q-3

let totalBox=+prompt("please enter total number of boxes in stack")
let EachBox=+prompt("please enter number of boxes to be placed in stack")
let numStack=totalBox/EachBox
// console.log(numStack)
let exactNum=Math.ceil(numStack)
console.log(exactNum)
exactNum--
console.log(parseFloat(exactNum))

// Q-4
let inputBeginigMile=+prompt("enter begining mile  ")
let inputBeginigGGas=+prompt("enter begining gallon of gas  ")
let inputEndingMile=+prompt("enter ending mile  ")
let inputEndingGGas=+prompt("enter ending gallon gas ")
const milevehicleGone=inputEndingMile-inputBeginigMile;
console.log(milevehicleGone)
const gasVehcleUsed=inputBeginigGGas-inputEndingGGas;
console.log(gasVehcleUsed);
const mileage=milevehicleGone/gasVehcleUsed
console.log(mileage+"mileage/gallon")

// Q-5
let age=+prompt("enter your age")
let myMuxRange=220-age;
console.log("Muximum heart rate is: "+myMuxRange)
let slowest=0.65*myMuxRange
let fastest=0.85*myMuxRange
console.log("The slowest rate is: "+slowest)
console.log("The fastest rate is: "+fastest)

// part-2 
// 1. What will be the output of running following code?
// console.log(Number(null));
// console.log(Number(undefined));
// console.log(Boolean("0"));
// console.log(Boolean(" "))

