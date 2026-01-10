"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
function add(num1, num2, num3) {
    return num3 ? num1 + num2 + num3 : num1 + num2;
}
console.log(add(1, 2));
console.log(add(1, 2, 3));
var sub = function (num1, num2, num3) {
    if (num3 === void 0) { num3 = 10; }
    return num1 - num2 - num3;
};
console.log(sub(1, 2));
var mul = function (num1, num2) {
    return num1 * num2;
};
console.log(mul(5, 6));
function add2(num1, num2) {
    var num3 = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        num3[_i - 2] = arguments[_i];
    }
    return num1 + num2 + num3.reduce(function (a, b) { return a + b; }, 0);
}
var numbers = [1, 2, 3, 4, 5, 6, 7];
console.log(add2.apply(void 0, __spreadArray([2, 3], numbers, false)));
console.log(add2(2, 3, 4, 5, 6, 7, 8, 9, 10));
function getItems(items) {
    return new Array().concat(items);
}
var concatResult = getItems([1, 2, 3, 4, 5, 6]);
console.log(concatResult);
var concatString = getItems(["a", "b", "c", "d"]);
console.log(concatString);
