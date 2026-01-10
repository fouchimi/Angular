"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Employee_id;
Object.defineProperty(exports, "__esModule", { value: true });
var Employee = /** @class */ (function () {
    function Employee(id, name, address) {
        _Employee_id.set(this, void 0);
        __classPrivateFieldSet(this, _Employee_id, id, "f");
        this.name = name;
        this.address = address;
    }
    Employee.prototype.getNameWithAddress = function () {
        return [this.name, this.address];
    };
    Employee.prototype.getEmployeeWithCreds = function () {
        return "".concat(this.name, " ").concat(this.address.street, " ").concat(this.address.city, " ").concat(this.address.state, " ").concat(this.address.zipCode);
    };
    Employee.getEmployeeCount = function () {
        return 50;
    };
    Object.defineProperty(Employee.prototype, "empId", {
        get: function () {
            return __classPrivateFieldGet(this, _Employee_id, "f");
        },
        set: function (empId) {
            __classPrivateFieldSet(this, _Employee_id, empId, "f");
        },
        enumerable: false,
        configurable: true
    });
    Employee.prototype.login = function () {
        return {
            name: 'Fouchimi Nvuh Ousmane',
            age: 20,
            id: 1,
            email: 'fousmane@gmail.com'
        };
    };
    return Employee;
}());
_Employee_id = new WeakMap();
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(id, name, address) {
        return _super.call(this, id, name, address) || this;
    }
    Manager.prototype.getEmployeeWithCreds = function () {
        return "".concat(this.name, " ").concat(this.address.street, " ").concat(this.address.city, " ").concat(this.address.state, " ").concat(this.address.zipCode);
    };
    return Manager;
}(Employee));
var employeeAddress = { street: '3066 Hayden road', city: 'Columbus', state: 'OH', zipCode: '43235' };
var john = new Employee(1, 'John', employeeAddress);
console.log(john);
john.empId = 100;
console.log("John new Employee Id", john.empId);
var nameWithAddress = john.getNameWithAddress();
console.log(nameWithAddress[0], nameWithAddress[1]);
console.log(john.getEmployeeWithCreds());
var fouchimi = new Manager(2, 'Fouchimi', employeeAddress);
console.log(fouchimi);
console.log(fouchimi.getEmployeeWithCreds());
console.log("Employee count: ", Employee.getEmployeeCount());
console.log("Call login method", john.login());
