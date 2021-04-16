// const { TestScheduler } = require("@jest/core");
const { expect } = require("@jest/globals");
const Employee = require("../lib/Employees");

test ("Can Instantiate Employee", () => {
    const employee = new Employee();
    expect(typeof(employee)).toBe("object");
})

test ("Can set name through constructor arguments", () => {
    const employee = new Employee("Patrick");
    expect(employee.name).toBe("Patrick");
})