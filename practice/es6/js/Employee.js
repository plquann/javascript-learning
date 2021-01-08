export class Employee {
    constructor(code, name, position, salary, coefficientPos) {
        this.code = code;
        this.name = name;
        this.position = position;
        this.salary = salary;
        this.coefficient = coefficientPos;
    }
    calcSalary() {
        return this.coefficient * this.salary;
    }
}