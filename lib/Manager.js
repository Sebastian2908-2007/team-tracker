const Employee = require("./Employee");

class Manager extends Employee{
    constructor(name='', employId='', email="",officeNumber='') {
        super(name,employId,email)

        this.officeNumber = officeNumber;
    }
};

module.exports = Manager;