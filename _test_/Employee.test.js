// const { TestScheduler } = require("@jest/core");
const { expect } = require("@jest/globals");
const Employee = require("../lib/Employees");

describe("Employee", () => {
    describe("initial", () => {
        //checks that an employee is being created
        it("Should create an object with employee name, id, and email", () => {
            const employee = new Employee("Employee", 123, "employee@job.com");
            expect(employee).toEqual({name: "Employee", id: 123, email: "employee@job.com"});
        });
    });

    //checks that an employee is an object
    test ("Can Instantiate Employee", () => {
        const employee = new Employee();
        expect(typeof(employee)).toBe("object");
    })


    //checks that the getName function is returning a name value
    test ("can get name with getName function", () => {
        const employee = new Employee("employee");
        expect(employee.getName()).toBe(employee.name);
    })

    //checking that the getID is returning an id
    test ("can get id with getID function", () => {
        const employee = new Employee(123);
        expect(employee.getId()).toBe(employee.id);
    })

    //checks that the getEmail function is returning an email
    test ("can get email with getEmail function", () => {
        const employee = new Employee("employee@job.com");
        expect(employee.getEmail()).toBe(employee.email);
    })

    //Ensures that the getRole function returns a role
    test ("can get role with getRole function", () => {
        const employee = new Employee("Employee");
        expect(employee.getRole()).toBe("Employee");
    })
})