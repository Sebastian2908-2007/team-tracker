const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern');
const htmlGen = require('../src/template');
const inquirer = require('inquirer');

class Program {
    constructor() {
        this.Manager;
        this.Engineer;
        this.intern
    }
    runProgram() {
        inquirer.prompt([ 
        {
            type: 'text',
            name: 'managerName',
            message:'what is the name of the manager?'
        },
        {
            type:'text',
            name:'managerEmployeeId',
            message:'what is the managers employee Id?'
        },
        {
            type:'text',
            name: 'managerEmail',
            message:'what is the managers Email?'
        },
        {
            type:'text',
            name:'officeNum',
            message:'what is the managers office number?'
        }
    ]).then(managerData => {
        //[managerName,managerEmployeeId,managerEmail,officeNum] = managerData;
        this.manager = new Manager(managerData.managerName,managerData.managerEmployeeId,managerData.managerEmail,managerData.officeNum)
        console.log(this.manager);
    })
    .catch(err => {
        console.log(err);
    })
    }

}
module.exports=Program;