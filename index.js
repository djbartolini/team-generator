const fs = require('fs');
const inquirer = require('inquirer');
inquirer.registerPrompt('loop', require('inquirer-loop')(inquirer));

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const generateHtml = require('./src/generate-html');

const questions = [{
    type: 'input',
    message: 'NAME: What is the manager\'s name?',
    name: 'managerName',
},
{
    type: 'input',
    message: 'ID: What is the manager\'s ID?',
    name: 'managerId',
},
{
    type: 'input',
    message: 'EMAIL: What is the manager\'s email?',
    name: 'managerEmail',
},
{
    type: 'input',
    message: 'OFFICE NUMBER: What is the manager\'s office number??',
    name: 'managerOffice',
},
{
    type: 'loop',
    message: 'Would you like to add another employee?',
    name: 'employees',
    questions: [
        {
            type: 'list',
            message: 'What type of employee are you adding?',
            name: 'role',
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            message: 'NAME: What is the employee\'s name?',
            name: 'name',
        },
        {
            type: 'input',
            message: 'ID: What is the employee\'s ID number?',
            name: 'id',
        },
        {
            type: 'input',
            message: 'EMAIL: What is the employee\'s email address?',
            name: 'email',
        },
        {
            type: 'input',
            message: 'GITHUB: What is the employee\'s GitHub username?',
            name: 'github',
            when: (employee) => employee.role === 'Engineer'
        },
        {
            type: 'input',
            message: 'SCHOOL: What is the name of the employee\'s school?',
            name: 'school',
            when: (employee) => employee.role === 'Intern'
        }
    ]
}];

function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            console.log('Data saved. Generating team sheet...');

            const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOffice);
            let employees = answers.employees;
            let engineers = [];
            let interns = [];

            for (let employee of employees) {
                if (employee.role === 'Engineer') {
                    const engineer = new Engineer(employees.role, employees.name, employees.id, employees.email, employees.github);
                    engineers.push(employee);
                } else if (employee.role === 'Intern') {
                    const intern = new Intern(employees.role, employees.name, employees.id, employees.email, employees.school);
                    interns.push(employee);
                }
            }


        })
}

init();