const Employee = require('../lib/Employee');

class Engineer extends Employee {
    constructor(name = '', employId = '', email='', gitHub='') {
        super(name,employId,email)
        this.gitHub = gitHub;

    }
};

module.exports = Engineer;