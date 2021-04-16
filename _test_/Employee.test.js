const { TestScheduler } = require("@jest/core");
const { expect } = require("@jest/globals");
const Employee = require("../lib/Employees");

TestScheduler("Can Instantiate Employee", () => {
    const employee = new Employee();
    expect(typeof(employee)).toBe("object");
})