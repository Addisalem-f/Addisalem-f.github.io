"use strict"

function Calculator() {

}

Calculator.prototype.setValue = function (a, b) {
    this.a = b;
    this.b = b;
}

Calculator.prototype.sum = function (a, b) {
    return this.a + this.b;
}

Calculator.prototype.sub = function (a, b) {
    return a - b;
}

Calculator.prototype.div = function (a, b) {
    return a / b;
}

Calculator.prototype.mul = function (a, b) {
    return a * b;
}

