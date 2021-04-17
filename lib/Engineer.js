const Employee = require("./Employees");

class Engineer extends Employee {
    constructor(name, id, email, officeNumber){
    super(name, id, email);
    this.gitHub = gitHub
    }
    getRole() {
        return "Engineer"
    }

    getOfficeNumber() {
        return this.gitHub;
    }
}

module.exports = Engineer;