const Employee = require('../lib/Employee');

class Intern extends Employee {
    constructor(name='', employId='',email='',school='') {
        super(name,employId,email)

        this.school = school;
    }
};

module.exports = Intern;