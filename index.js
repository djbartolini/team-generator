const inquirer = require('inquirer');
const fs = require('fs');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

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
    type: 'list',
    message: 'ADD ANOTHER: Would you like to add another employee?',
    choices: ['Engineer', 'Intern', 'None'],
    name: 'add'
},
{
    type: 'input',
    message: 'NAME: What is the engineer\'s name?',
    name: 'engineerName',
    when: (answers) => answers.add === 'Engineer',
},
{
    type: 'input',
    message: 'NAME: What is the engineer\'s ID?',
    name: 'engineerId',
    when: (answers) => answers.add === 'Engineer',
},
{
    type: 'input',
    message: 'EMAIL: What is the engineer\'s email?',
    name: 'engineerEmail',
    when: (answers) => answers.add === 'Engineer',
},
{
    type: 'input',
    message: 'GITHUB: What is the engineer\'s github?',
    name: 'engineerGithub',
    when: (answers) => answers.add === 'Engineer',
}]

function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            // writeToFile(answers);
            console.log('Data saved. Generating team sheet...');
        })
}

init();