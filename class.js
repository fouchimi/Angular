"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Employee = /** @class */ (function () {
    function Employee(id, name, address) {
        this.id = id;
        this.name = name;
        this.address = address;
    }
    Employee.prototype.getNameWithAddress = function () {
        return [this.name, this.address];
    };
    Employee.prototype.getEmployeeWithCreds = function () {
        return "".concat(this.id, " ").concat(this.name, " ").concat(this.address);
    };
    return Employee;
}());
var john = new Employee(1, 'John', 'Highway 71');
console.log(john);
var nameWithAddress = john.getNameWithAddress();
console.log(nameWithAddress[0], nameWithAddress[1]);
console.log(john.getEmployeeWithCreds());
