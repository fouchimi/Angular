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

    getEmployeeWithCreds() : string {
        return `${this.#id} ${this.name} ${this.address}`;
    }

    static getEmployeeCount() : number {
        return 50;
    }

    set empId(empId: number) {
        this.#id = empId;
    }

    get empId(): number {
        return this.#id;
    }
}

class Manager extends Employee  {
    constructor(id: number, name: string, address: string) {
        super(id, name, address);
    }

    override getEmployeeWithCreds() : string {
        return `${this.name} ${this.address}`;
    }
}

let john = new Employee(1, 'John', 'Highway 71');

console.log(john);

john.empId = 100;

console.log("John new Employee Id", john.empId);

let nameWithAddress = john.getNameWithAddress();
console.log(nameWithAddress[0], nameWithAddress[1]);

console.log(john.getEmployeeWithCreds());

let fouchimi = new Manager(2, 'Fouchimi', '3066 Hayden Rd');
console.log(fouchimi);
console.log(fouchimi.getEmployeeWithCreds());

console.log("Employee count: ", Employee.getEmployeeCount());