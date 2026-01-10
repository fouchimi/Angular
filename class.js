"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Employee = /** @class */ (function () {
    function Employee(id, name, address) {
        this.id = id;
        this.name = name;
        this.address = address;
    }
    return Employee;
}());
var john = new Employee(1, 'John', 'Highway 71');
console.log(john);
