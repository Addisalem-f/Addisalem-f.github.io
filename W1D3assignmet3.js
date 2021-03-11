"use strict"
let prompt=require("prompt-sync")();
// Q1
let weather=prompt("enter today's weather ")
// let weather="snow";
if(weather==="hot"){
    console.log("please wear sandals")
}
else if(weather==="rain"){
    console.log("please wear galashes")
}
else if(weather==="snow"){
    console.log("please wear boots")
}
else{
    console.log("please wear sneakers")
}

// Q2.
let studName=prompt("student's name: ");
let numCredit=+prompt("number of completed Credit  :")
if(0<numCredit&& numCredit<30){
    console.log(studName+ "=> Freshman")
}
else if(30<=numCredit && numCredit<60){
    console.log(studName+" => Sophomore")
}
else if(60<numCredit && numCredit<90){
    console.log(studName+" => Junior")
}
else{
    console.log(studName+" => Senior")
}

    // Q3

    let costOfHouse=+prompt("Cost of House: ")
let downPayement="";
parseFloat(downPayement);
if(costOfHouse>50000){
    downPayement=costOfHouse*0.05;
}
else if(costOfHouse>50000 && costOfHouse<100000){
    downPayement=1000+0.1*(costOfHouse-50000)
}
else if(costOfHouse>100000 && costOfHouse<200000){
    downPayement=2000+0.15*(costOfHouse-100000)
}
else if(costOfHouse>=200000){
    downPayement=5000+0.1*(costOfHouse-200000)
}
console.log("Down Payemnt is: "+downPayement)


let status=prompt("your status: student,faculty,others ");
let numberOfBooks=+prompt("how much book you want to borrrow?");
let loanDurationinWeek="";
if(status==="student"){
    if(numberOfBooks===0){
        loanDurationinWeek="6";
    }
    else if(numberOfBooks>0&&numberOfBooks<3){
        loanDurationinWeek="4";
    }
  else if(numberOfBooks>=3){
loanDurationinWeek="2"
}
}

if(status==="faculty"){
    if(numberOfBooks===0){
        loanDurationinWeek="12";
    }
    else if(numberOfBooks>0&&numberOfBooks<3){
        loanDurationinWeek="10";
    }
else if(numberOfBooks>=3){
loanDurationinWeek="8"
}
}

if(status==="other"){
    if(numberOfBooks===0){
        loanDurationinWeek="4";
    }
    else if(numberOfBooks>0&&numberOfBooks<3){
        loanDurationinWeek="3";
    }
else if(numberOfBooks>=3){
loanDurationinWeek="2"
}
}
console.log("Loan duration in week is: "+loanDurationinWeek)


// Q5

let age=+prompt("age  ")
let season=prompt("season ")
let bedtime="";

if(age<=5 ){
    if(season==="summer"||season==="fall"){
    bedtime="8:30";
}
    else{
// else if(season==="winter"||season==="spring")

    bedtime="8:00 pm "
}
}
else if(age>=6 && age<=12){
    if(season==="summer"){
    bedtime="9:30 "}
    else{
        bedtime="8:30 pm "
    }}
else if(age>12){
    if(season==="summer"){
        bedtime="10:30 pm "
    }
    else{
// else if(season==="winter"||season==="spring"||season==="fall")

        bedtime="90:30 "
    }
}
console.log("Age "+ age +" should go to bed at "+bedtime +"at "+season +" season")

