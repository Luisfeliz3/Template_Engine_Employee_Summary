// TODO: Write code to define and export the Employee class
class Employee {
  constructor(name, employeeType, id, email) {
    this.name = name;
    this.employeeType = employeeType;
    this.id = id;
    this.email = email;
  }

  getName() {
    return this.name;
  }

  getId() {
    return this.id;
  }

  getEmail() {
    return this.email;
  }
}

module.exports = Employee;
