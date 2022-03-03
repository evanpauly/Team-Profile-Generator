const fs = require('fs');
const inquirer = require('inquirer');

const propmtUser = () => {
    return inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'What is your name? (Required)',
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('Please enter your name!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'id',
        message: 'What is your ID? (Required)',
        validate: idInput => {
          if (idInput) {
            return true;
          } else {
            console.log('Please enter your ID!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email address? (Required)',
        validate: emailInput => {
          if (emailInput) {
            return true;
          } else {
            console.log('Please enter your email address!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'officeNumber',
        message: 'What is your office number? (Required)',
        validate: officeInput => {
          if (officeInput) {
            return true;
          } else {
            console.log('Please enter your office number!');
            return false;
          }
        }
      },
      {
        type: 'confirm',
        name: 'confirmEngineer',
        message: 'Would you like to enter information about an engineer?',
        default: true
      },
      {
        type: 'input',
        name: 'engineerName',
        message: "What is the Engineer's name?",
        when: ({ confirmEngineer }) => confirmEngineer
      },
      {
        type: 'input',
        name: 'engineerID',
        message: "What is the Engineer's ID?",
        when: ({ confirmEngineer }) => confirmEngineer
      },
      {
        type: 'input',
        name: 'engineerGithub',
        message: "What is the Engineer's GitHub username?",
        when: ({ confirmEngineer }) => confirmEngineer
      },
      {
        type: 'input',
        name: 'engineerEmail',
        message: "What is the Engineer's email address?",
        when: ({ confirmEngineer }) => confirmEngineer
      },
      {
        type: 'confirm',
        name: 'confirmIntern',
        message: 'Would you like to enter information about an intern?',
        default: true
      },
      {
        type: 'input',
        name: 'internName',
        message: "What is the Intern's name?",
        when: ({ confirmIntern }) => confirmIntern
      },
      {
        type: 'input',
        name: 'internID',
        message: "What is the Intern's ID?",
        when: ({ confirmIntern }) => confirmIntern
      },
      {
        type: 'input',
        name: 'internGithub',
        message: "What is the Intern's GitHub username?",
        when: ({ confirmIntern }) => confirmIntern
      },
      {
        type: 'input',
        name: 'internEmail',
        message: "What is the Intern's email address?",
        when: ({ confirmIntern }) => confirmIntern
      }
    ]);
};

propmtUser();