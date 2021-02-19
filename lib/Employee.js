const BuildIt = require("./BuildIt");

class Employee extends BuildIt{
    constructor(name='', id , email){
        this.name = name;
        this.id = id;
        this.email = email;
        
    }

    getName(){
        return `${this.name}`;



    }
    getId(){
        return `ID: ${this.id}`;

    }
    getEmail(){
        return `Email: ${this.email}`

    }
    getRole(){


    }



}
module.exports = Employee;