// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("../lib/Employee");

class Manager extends Employee {
    constructor(name, employeeType, id, email,officeNumber){
        super(name, employeeType, id, email);
        this.officeNumber = officeNumber;
    }


getRole(){
return 'Manager'
}


getOffice(){
  return this.officeNumber;
}



}

module.exports = Manager;