const Employee = require('./Employee');

class Engineer extends Employee{
    constructor(name, id, email, github, role){
        super(name, id, email, role);

        this.role = role;
        this.github = github;
        this.email = email;
    }
    getGithub(){
        return {
            github: this.github
        }
    }
    getRole(){
        return {
            role: this.role
        }

        
    }
    
}
module.exports = Engineer;