const inquirer = require('inquirer');
const Employee = require('./lib/Employee');

const generatePage = require('./src/page-template');
const { writeFile, copyFile } = require('./src/page-template');

const promptUser = () => {
    return inquirer.prompt([
      {
        type: 'confirm',
        name: 'start',
        message: 'This prompt will ask you questions to help gather your team info, Continue?',
        default: false ,
        validate: startInput=>{
            if (startInput){
                return true;
            }else{
                console.log('Goodbye then!')
                return;
            }
        }
      }
    ])}

const promptEmployee = (employeeData) => {
    console.log(`
    ==================
    Add a New Employee
    ==================
    `);
  
    //If there's no 'projects' array property, create one
    if (!employeeData.arry) {
        employeeData.arry = [];
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
            when: (answers)=> answers.role === "Intern"   //????????????????????????
                
        },
        {
          type: 'input',
          name: 'id',
          message: 'Enter this teammates id:'
        },
        {
          type: 'input',
          name: 'github',
          message: 'Enter the employee GitHub name:',
          validate: linkInput => {
            if (linkInput) {
              return true;
            } else {
              console.log('You need to enter a GitHub name!');
              return false;
            }
          },
          when: (answers)=> (answers.role == "Engineer" || answers.role == "Manager" )
        },
        {
          type: 'input',
          name: 'email',
          message: 'Enter the employee Email:',
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
          message: 'Enter the employee phone number:',
          validate: phoneInput => {
            if (phoneInput) {
              return true;
            } else {
              console.log('You need a number to call them!');
              return false;
            }
          },
          when: (answers)=> (answers.role == "Engineer" || answers.role == "Manager" )

        },
        {
          type: 'confirm',
          name: 'addAnother',
          message: 'Would you like to enter another teammate?',
          default: false
        }
      ])
      .then(teamData => {
        employeeData.arry.push(teamData);
        if (teamData.addAnother) {
          return promptEmployee(employeeData);
        } else {
          return employeeData;
        }
      });
    
  };





// promptProject()

promptUser()
.then(promptEmployee)
// .then(employeeData => {
//     return console.log(employeeData);
// })
  
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
