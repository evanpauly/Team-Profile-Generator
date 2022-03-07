const fs = require('fs');
const inquirer = require('inquirer');
const generateSite = require('./dist/page-template');
//const employee = require('./lib/Employee');
//const Manager = require('./lib/Manager');
//const Engineer = require('./lib/Engineer');
//const Intern = require('./lib/Intern');
const { writeFile, copyFile } = require('./src/generate-site');

const propmtUser = () => {
    return inquirer.prompt([
        //start manager prompts
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
        name: 'confirmTeam',
        message: 'Would you like to add team members?',
        default: true
      }
    ]);
  };
      const promptMembers = teamData => {

      if (!teamData.members) {
        teamData.members = [];
      }
      return inquirer.prompt([
      //start engineer prompts
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
      //start intern prompts
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
      },
      {
        type: 'confirm',
        name: 'confirmAddMember',
        message: 'Would you like to enter another team member?',
        default: false
      },
    ])
  };


propmtUser()
  .then(promptMembers)
  .then(teamData => {
    return generateSite(teamData);
  })
  .then(pageHTML => {
    return writeFile(pageHTML);
  })
  .then(writeFileResponse => {
    console.log(writeFileResponse);
    return copyFile();
  })
  .then(copyFileResponse => {
    console.log(copyFileResponse);
  })
  .catch(err => {
    console.log(err);
 });