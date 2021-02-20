const Employee = require('./Employee');

class Manager extends Employee{
    constructor(name){
        super(name, id , email, role);
        this.number= number;
        
    }
    officeNumber(){
        return {
            number: this.number
        }


    }
    
}
module.exports = Manager;