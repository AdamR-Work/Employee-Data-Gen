const Employee = require('./Employee');

class Intern extends Employee{
    constructor(name, id, email, school, role){
        super(name, id , email, role);

        this.role =role;
        
        this.school = school;
    }
    getSchool(){
        return{
            school: this.school
        }
    }
    getRole(){
        return{
            role: this.role
        }

        
    }
    
}
module.exports = Intern;