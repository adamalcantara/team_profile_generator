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
                    if(data.match(/\S+@\S+\.\S+/)) {
                        return true
                    }
                    return "Please enter a valid email address."
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
            {
                type: "list",
                name: "teamMember",
                message: "Would you like to add another team member?",
                choices: ['Engineer', 'Intern', 'Employee', 'I do not need to add anyone else'],
            },

        ]).then((answers) => {
            const manager = new Manager(
                answers.name, 
                answers.id,
                answers.email,
                answers.officeNumber
                );
            //check which answer they chose for "choices"
            //write an if statement for the choices so that "if answer was engineer, call the engineer function", etc
            console.log(manager);
            // teamArray.push(manager)
            // createTeam();
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
                    if(data.match(/\S+@\S+\.\S+/)) {
                        return true
                    }
                    return "Please enter a valid email address."
                }
            },

        ]).then((data) => {
            const employee = new Employee(
                data.employeeName, 
                data.employeeId,
                data.employeeEmail,
                );
            console.log(employee);
            // teamArray.push(employee)
            // createTeam();
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
                    if(data.match(/\S+@\S+\.\S+/)) {
                        return true
                    }
                    return "Please enter a valid email address."
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

        ]).then((answers) => {
            const manager = new Intern(
                answers.name, 
                answers.id,
                answers.email,
                answers.officeNumber
                );
            console.log(manager);
            // teamArray.push(intern)
            // createTeam();
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
                    if(data.match(/\S+@\S+\.\S+/)) {
                        return true
                    }
                    return "Please enter a valid email address."
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

        ]).then((answers) => {
            const manager = new Engineer(
                answers.name, 
                answers.id,
                answers.email,
                answers.officeNumber
                );
            console.log(manager);
            // teamArray.push(intern)
            // createTeam();
        });
    }

    // createEngineer();
    // createIntern();
    // createEmployee();
    createManager();

}


menu();