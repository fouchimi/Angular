export { }
import { Login, User } from "./interface";

interface Address {
    street: string;
    city: string;
    state: string;
    zipCode: string;
}

class Employee implements Login {
    #id: number;
    protected name: string;
    address: Address;

    constructor(id: number, name: string, address: Address) {
        this.#id = id;
        this.name = name;
        this.address = address;
    }

    getNameWithAddress(): [string, Address] {
        return [this.name, this.address];
    }

    getEmployeeWithCreds(): string {
        return `${this.name} ${this.address.street} ${this.address.city} ${this.address.state} ${this.address.zipCode}`;
    }

    static getEmployeeCount(): number {
        return 50;
    }

    set empId(empId: number) {
        this.#id = empId;
    }

    get empId(): number {
        return this.#id;
    }

    login(): User {
        return {
            name: 'Fouchimi Nvuh Ousmane',
            age: 20,
            id: 1,
            email: 'fousmane@gmail.com'
        };
    }
}

class Manager extends Employee {
    constructor(id: number, name: string, address: Address) {
        super(id, name, address);
    }

    override getEmployeeWithCreds(): string {
        return `${this.name} ${this.address.street} ${this.address.city} ${this.address.state} ${this.address.zipCode}`;
    }
}

let employeeAddress = { street: '3066 Hayden road', city: 'Columbus', state: 'OH', zipCode: '43235' };

let john = new Employee(1, 'John', employeeAddress);

console.log(john);

john.empId = 100;

console.log("John new Employee Id", john.empId);

let nameWithAddress = john.getNameWithAddress();
console.log(nameWithAddress[0], nameWithAddress[1]);

console.log(john.getEmployeeWithCreds());

let fouchimi = new Manager(2, 'Fouchimi', employeeAddress);
console.log(fouchimi);
console.log(fouchimi.getEmployeeWithCreds());

console.log("Employee count: ", Employee.getEmployeeCount());

console.log("Call login method", john.login());