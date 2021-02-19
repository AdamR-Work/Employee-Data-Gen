var inquirer = require('inquirer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Employee = require('./lib/Employee');

class BuildIt {
    constructor(){
        this.employee;
        this.email;
        this.id;
        this.role;



    }
    questions(){
        inquirer
        .prompt({
            type:'text',
            name:'name',
            message:'What is the employees name?',
            validate:nameInput=>{
                if(nameInput){
                    return true;  
                }else{
                    console.log('Please Enter a Name.');
                    return false;
                }
            }
        })
        //?????????????????????????????????????
        .then(({name})=>{
            this.employee = new Employee(name);

        })





        .prompt({
            type:'list',
            name:'role',
            choices:['Intern','Engineer','Manager']
        })

        //??????????????????????????????
        .then(({role})=>{
            this.role = new Employee(role);
        })
    }
}


module.exports = BuildIt;