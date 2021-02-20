const Employee = require('./Employee');

class Manager extends Employee{
    constructor(name, id, email, role, office){
        super(name, id , email, role);
        this.office= office;
        this.role= role;
    }
    officeNumber(){
        return  this.office  
    }
    getRole(){
        return this.role  
    }
    
}
module.exports = Manager;