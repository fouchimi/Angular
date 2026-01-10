export {}

let lastName : string = 'Santosh';
let newName = lastName.toUpperCase();
console.log(newName);

let age: number;

age = 25;
age = 25.5

console.log("age", age);

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

let num = res.find((num) => num === 4);

console.log(num);

let sum = numList.reduce((acc, num) => acc + num);

console.log("Sum: ", sum);

const enum Color {
    Red, Green, Blue
}

let c: Color = Color.Blue;

let swapNumbs: [number, number];

function swapNumbers(num1 : number, num2 : number) : [number, number] {
    return [num2, num1];
}

swapNumbs = swapNumbers(10, 20);

console.log(swapNumbs);

let firstNumber = swapNumbs[0];
let secondNumber = swapNumbs[1];

console.log(firstNumber, secondNumber);

let department: any;
department = "CSE";
department = 10;

function add(num1: number, num2: number) : number {
    return num1 + num2;
}

let newsum = add(5, 2);

console.log("newsum", newsum);
