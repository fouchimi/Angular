"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var currentUser = {
    name: 'Fouchimi Nvuh Ousmane',
    age: 20,
    id: 1,
    email: 'fousmane@gmail.com'
};
console.log(currentUser);
var employee = {
    name: 'Fouchimi Nvuh Ousmane',
    id: 1,
    email: 'fousmane@gmail.com',
    salary: 190000
};
console.log("Employee", employee);
var _a = { name: "john", id: 1, email: "leboss@gmail.com" }, userName = _a.name, email = _a.email;
console.log("userName", userName);
console.log("email", email);
var _b = [
    { name: 'John', id: 1, email: 'john@blackstraw.ai' },
    { name: 'Mike', id: 2, email: 'mike@google.com' },
    { name: 'Fadil', id: 3, email: 'fadil@lowes.com' },
    { name: 'Mariam', id: 4, email: 'mariam@nordstrom.com' }
], user1 = _b[0], user2 = _b[1], restUsers = _b.slice(2);
console.log(user1, user2);
console.log(restUsers);
var filterName = restUsers
    .filter(function (user) { return user.id > 2; })
    .map(function (user) { return user.name; });
console.log("filterName", filterName);
