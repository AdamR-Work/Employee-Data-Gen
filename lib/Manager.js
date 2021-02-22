const Employee = require('./Employee');

class Manager extends Employee{
    constructor(name, id, email, office, role){
        super(name, id , email, role);
        this.name = name;
        this.id = id;   
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