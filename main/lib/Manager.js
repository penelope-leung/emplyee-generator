const Employee = require("./Employee")

class Manager extends Employee {
  @Override  
  constructor(officeNumber) {
     this.officeNumber = officeNumber
     
    }
    getRole () {
      return  "Manager"
  }
  }
  
  module.exports = Manager


