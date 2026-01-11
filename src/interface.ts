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

let [user1, user2, ...restUsers]: User[] = [
    {name : 'John', id: 1, email: 'john@blackstraw.ai'}, 
    {name: 'Mike', id: 2, email: 'mike@google.com'}, 
    {name: 'Fadil', id: 3, email: 'fadil@lowes.com'},
    {name: 'Mariam', id: 4, email: 'mariam@nordstrom.com'}
];

console.log(user1, user2);
console.log(restUsers);

let filterName = restUsers
    .filter(user => user.id > 2)
    .map(user => user.name);

console.log("filterName", filterName);

export interface Login {
    login() : User;
}