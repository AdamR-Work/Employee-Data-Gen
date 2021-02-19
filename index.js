const BuildIt = require('./lib/BuildIt');
const inquirer = require('inquirer');
const generatePage = require('./src/page-template');
const { writeFile, copyFile } = require('./utils/generate-site');


const promptUser = employeeData => {
    console.log(`
  =================
  Add a New Project
  =================
  `);
  
    // If there's no 'projects' array property, create one
    if (!employeeData.array) {
        employeeData.array = [];
    }
    return inquirer
      .prompt([
        {
          type: 'input',
          name: 'name',
          message: 'What is the name of your teammate? (Required)',
          validate: nameInput => {
            if (nameInput) {
              return true;
            } else {
              console.log('You need to enter a name!');
              return false;
            }
          }
        },
        {// they pick the role of teammate then it continues on with questions for that specific employee
            type:'list',
            name:'role',
            choices:['Intern','Engineer','Manager']
        },
        {
          type: 'input',
          name: 'id',
          message: 'What is this teammates id?',
        },
        {
          type: 'input',
          name: 'link',
          message: 'Enter the employee GitHub name. (Required)',
          validate: linkInput => {
            if (linkInput) {
              return true;
            } else {
              console.log('You need to enter a GitHub name!');
              return false;
            }
          }
        },
        {
          type: 'input',
          name: 'email',
          message: 'Enter the employee Email.',
          validate: emailInput => {
            if (emailInput) {
              return true;
            } else {
              console.log('You need to enter a email!');
              return false;
            }
          }
        },
        {
            type: 'input',
          name: 'phone',
          message: 'Enter the employee phone number.',
          validate: phoneInput => {
            if (phoneInput) {
              return true;
            } else {
              console.log('You need a number to call them!');
              return false;
            }
          }
        },
        {
            type: 'input',
            name: 'school',
            message: 'Enter the interns school name.',
            validate: phoneInput => {
              if (phoneInput) {
                return true;
              } else {
                console.log('enter a school!');
                return false;
              }
            },
            when: ({role})=> role(Intern)   //????????????????????????
                
        },
        {
          type: 'confirm',
          name: 'addAnother',
          message: 'Would you like to enter another teammate?',
          default: false
        }
      ])
      .then(teamData => {
        employeeData.array.push(teamData);
        if (teamData.addAnother) {
          return promptUser(employeeData);
        } else {
          return employeeData;
        }
      });
  };







promptUser()
  
  .then(employeeData => {
    return generatePage(employeeData);
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
