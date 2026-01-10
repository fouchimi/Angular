function add (num1 : number, num2 : number, num3?: number) : number {
    return num3 ? num1 + num2 + num3 : num1 + num2;
}

console.log(add(1, 2));

console.log(add(1, 2, 3));

const substract = (num1 : number, num2: number, num3 = 10) : number => num1 - num2 - num3;

console.log(substract(1, 2));

const mult = function (num1: number, num2: number) : number {
    return num1 * num2;
}

console.log(mult(5, 6));