const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const teamArray = [];

const createManager = () => {
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
            choices: ['Manager', 'Engineer', 'Intern', 'I do not need to add anyone else'],
        },

    ]).then((answers) => {
        const manager = new Manager(
            answers.name, 
            answers.id,
            answers.email,
            answers.officeNumber
            );
        teamArray.push(manager)
        let willContinue = answers.teamMember !== 'I do not need to add anyone else';
        let employeeType = answers.teamMember;
        while (willContinue) {
            if (employeeType === 'Engineer') {
                createEngineer();
            }
            else if (employeeType === 'Intern') {
                createIntern();
            }
            else if (employeeType === 'Manager'){
                createManager();
            }
            return
        }
        console.log(teamArray);
        
        // createTeam();
    });
}

const createIntern = () => {
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
        {
            type: "list",
            name: "teamMember",
            message: "Would you like to add another team member?",
            choices: ['Manager', 'Engineer', 'Intern', 'I do not need to add anyone else'],
        },

    ]).then((answers) => {
        const intern = new Intern(
            answers.name, 
            answers.id,
            answers.email,
            answers.school
            );
            teamArray.push(intern)
            let willContinue = answers.teamMember !== 'I do not need to add anyone else';
            let employeeType = answers.teamMember;
            while (willContinue) {
                if (employeeType === 'Engineer') {
                createEngineer();
            }
                else if (employeeType === 'Intern') {
                createIntern();
            }
                else if (employeeType === 'Manager'){
                createManager();
            }
            return
        }
            console.log(teamArray);
        // createTeam();
    });
}

const createEngineer = () => {
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
        {
            type: "list",
            name: "teamMember",
            message: "Would you like to add another team member?",
            choices: ['Manager', 'Engineer', 'Intern', 'I do not need to add anyone else'],
        },

    ]).then((answers) => {
        const engineer = new Engineer(
            answers.name, 
            answers.id,
            answers.email,
            answers.github
            );
            teamArray.push(engineer)
        let willContinue = answers.teamMember !== 'I do not need to add anyone else';
        let employeeType = answers.teamMember;
        while (willContinue) {
            if (employeeType === 'Engineer') {
                createEngineer();
            }
            else if (employeeType === 'Intern') {
                createIntern();
            }
            else if (employeeType === 'Manager'){
                createManager();
            }
            return
        }
            console.log(teamArray);
        // createTeam();
    });
}

const init = () => {
    createManager();
    // inquirer.prompt([
    //     {
    //         type: "list",
    //         name: "teamMember",
    //         message: "Would you like to add another team member?",
    //         choices: ['Manager', 'Engineer', 'Intern', 'I do not need to add anyone else'],
    //     },
        
    // ]).then((answers) => {
    //     let willContinue = answers.teamMember !== 'I do not need to add anyone else';
    //     let employeeType = answers.teamMember;
    //     while (willContinue) {
    //         if (employeeType === 'Engineer') {
    //             createEngineer();
    //         }
    //         else if (employeeType === 'Intern') {
    //             createIntern();
    //         }
    //         else if (employeeType === 'Manager'){
    //             createManager();
    //         }

    //         // another inquirer.prompt() asking do you want to add another user? if so, what kind?
    //         // update willContinue  and employeeType based on response

    //     }

    //     // print your array into an html file
    // })
    

}


init();