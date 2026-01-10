export {}

let lastName : string = 'Santosh';
let newName = lastName.toUpperCase();
console.log(newName);

let age: number;

age = 25;
age = 25.5

let dob : string = "25";

let result = parseInt(dob);

let isValid : boolean = false;

console.log("result: " + result);

let empList : string[];

empList = ["Fouchimi", "Nvuh", "Ousmane"];

empList = empList.filter((name) => name.length >= 5);

console.log("empList", empList);

let numList : Array<number>;

numList = [1, 2, 3, 4, 5];

let res = numList.filter((num) => num > 2);

console.log(res);
