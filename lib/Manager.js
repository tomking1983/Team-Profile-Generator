// importing Employee constructor 
const Employee = require('./Employee');

// manager constructor extends employee constructor 
class Manager extends Employee {

      // override employee role to manager 
      getRole () {
        return "Manager";
    }

    constructor (name, id, email, officeNumber) {
        // calling employee constructor
        super (name, id, email); 
        
        this.officeNumber = officeNumber; 
    }

    getOfficeNumber () {
        return this.officeNumber;
    }
  
}

// to be exported 
module.exports = Manager; 