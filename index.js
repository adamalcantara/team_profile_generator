const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

menu = () => {
    createManager = () => {
        inquirer.prompt([
            {
                type: "input",
                name: "name",
                message: "Enter the manager's name",
                validate: data => {
                    if(data !== ""){
                        return true
                    } 
                    return "Please enter a name."
                }
            },
            {
                type: "input",
                name: "id",
                message: "What is the team manager's id?",
                validate: data => {
                    if(data !== ""){
                        return true
                    } 
                    return "Please enter an ID."
                }
            },
            {
                type: "input",
                name: "email",
                message: "What is the team manager's email?",
                validate: data => {
                    if(data !== ""){
                        return true
                    } 
                    return "Please enter an email."
                }
            },
            {
                type: "input",
                name: "officeNumber",
                message: "What is the team manager's office number?",
                validate: data => {
                    if(data !== ""){
                        return true
                    } 
                    return "Please enter a number."
                }
            },

        ]).then((data) => {
            const manager = new Manager(
                data.managerName, 
                data.managerId,
                data.managerEmail,
                data.managerOfficeNumber
                );
            console.log(manager);
            teamArray.push(manager)
            createTeam();
        });
    }

    createEmployee = () => {
        inquirer.prompt([
            {
                type: "input",
                name: "name",
                message: "Enter the employee's name",
                validate: data => {
                    if(data !== ""){
                        return true
                    } 
                    return "Please enter a name."
                }
            },
            {
                type: "input",
                name: "id",
                message: "What is the employee's id?",
                validate: data => {
                    if(data !== ""){
                        return true
                    } 
                    return "Please enter an ID."
                }
            },
            {
                type: "input",
                name: "email",
                message: "What is the employee's email?",
                validate: data => {
                    if(data !== ""){
                        return true
                    } 
                    return "Please enter an email."
                }
            },

        ]).then((data) => {
            const employee = new Employee(
                data.employeeName, 
                data.employeeId,
                data.employeeEmail,
                );
            console.log(employee);
            teamArray.push(employee)
            createTeam();
        });
    }
    
    createIntern = () => {
        inquirer.prompt([
            {
                type: "input",
                name: "name",
                message: "Enter the intern's name",
                validate: data => {
                    if(data !== ""){
                        return true
                    } 
                    return "Please enter a name."
                }
            },
            {
                type: "input",
                name: "id",
                message: "What is the intern's id?",
                validate: data => {
                    if(data !== ""){
                        return true
                    } 
                    return "Please enter an ID."
                }
            },
            {
                type: "input",
                name: "email",
                message: "What is the intern's email?",
                validate: data => {
                    if(data !== ""){
                        return true
                    } 
                    return "Please enter an email."
                }
            },
            {
                type: "input",
                name: "school",
                message: "What is the intern's school?",
                validate: data => {
                    if(data !== ""){
                        return true
                    } 
                    return "Please enter a school."
                }
            },

        ]).then((data) => {
            const intern = new intern(
                data.internName, 
                data.internId,
                data.internEmail,
                data.internSchool,
                );
            console.log(intern);
            teamArray.push(intern)
            createTeam();
        });
    }

    createEngineer = () => {
        inquirer.prompt([
            {
                type: "input",
                name: "name",
                message: "Enter the Engineer's name",
                validate: data => {
                    if(data !== ""){
                        return true
                    } 
                    return "Please enter a name."
                }
            },
            {
                type: "input",
                name: "id",
                message: "What is the Engineer's id?",
                validate: data => {
                    if(data !== ""){
                        return true
                    } 
                    return "Please enter an ID."
                }
            },
            {
                type: "input",
                name: "email",
                message: "What is the Engineer's email?",
                validate: data => {
                    if(data !== ""){
                        return true
                    } 
                    return "Please enter an email."
                }
            },
            {
                type: "input",
                name: "github",
                message: "What is the Engineer's GitHub username?",
                validate: data => {
                    if(data !== ""){
                        return true
                    } 
                    return "Please enter a username."
                }
            },

        ]).then((data) => {
            const intern = new intern(
                data.engineerName, 
                data.engineerId,
                data.engineerEmail,
                data.engineerGithub,
                );
            console.log(intern);
            teamArray.push(intern)
            createTeam();
        });
    }

    createEngineer();
    createIntern();
    createEmployee();
    createManager();

}


menu();