const Employee = require('./Employee');

class Manager extends Employee{
    constructor(name, id, email, github, role){
        super(name, id , email, role);
        this.number= number;
        this.github= github;
    }
    officeNumber(){
        return {
            number: this.number
        }
    }
    getGithub(){
        return {
            github: this.github
        }
    }
    
}
module.exports = Manager;