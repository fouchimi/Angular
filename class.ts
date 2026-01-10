export {}

class Employee {
    #id: number;
    protected name: string;
    address: string;

    constructor(id : number, name: string, address: string) {
        this.#id = id;
        this.name = name;
        this.address = address;
    }

    getNameWithAddress() : [string, string] {
        return [this.name, this.address];
    }

    getEmployeeWithCreds() {
        return `${this.#id} ${this.name} ${this.address}`;
    }
}

class Manager extends Employee  {
    constructor(id: number, name: string, address: string) {
        super(id, name, address);
    }

    getEmployeeWithCreds() {
        return `${this.name} ${this.address}`;
    }
}

let john = new Employee(1, 'John', 'Highway 71');

console.log(john);

let nameWithAddress = john.getNameWithAddress();
console.log(nameWithAddress[0], nameWithAddress[1]);

console.log(john.getEmployeeWithCreds());

let fouchimi = new Manager(2, 'Fouchimi', '3066 Hayden Rd');
console.log(fouchimi);
console.log(fouchimi.getEmployeeWithCreds());