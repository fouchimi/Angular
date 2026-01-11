export {}

export interface User {
    name: string;
    age?: number;
    id: number;
    email: string;
}

var currentUser = {
    name : 'Fouchimi Nvuh Ousmane',
    age: 20, 
    id: 1,
    email: 'fousmane@gmail.com'
}

console.log(currentUser);

interface IEmployee extends User {
    salary : number;
}

const employee : IEmployee = {
    name : 'Fouchimi Nvuh Ousmane',
    id: 1,
    email: 'fousmane@gmail.com',
    salary: 190000
}

console.log("Employee", employee);

let { name : userName, email } : User = {name: "john", id: 1, email: "leboss@gmail.com"};

console.log("userName", userName);
console.log("email", email);

export interface Login {
    login() : User;
}