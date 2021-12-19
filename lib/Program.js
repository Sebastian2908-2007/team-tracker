const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern');
const htmlGen = require('../src/template');
const inquirer = require('inquirer');
let managerArr = [];
let engineerArr = [];
let internArr = [];

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
        managerArr.push(this.manager);
        console.log(managerArr);
       return this.chooseEmployee();
    })
    .catch(err => {
        console.log(err);
    })
  }
  chooseEmployee() {
      inquirer.prompt({
          type: 'checkbox',
          name: 'chooseEmp',
          message:'Do you wish to add an intern or an engineer',
          choices:['intern','engineer']
      }).then(choice => {
          if(choice.chooseEmp === 'intern') {
              return this.internPrompt();
          }
          return this.engineerPrompt();
      })
      .catch(err => {
          console.log(err);
      })
  }
  internPrompt() {
      console.log('intern chosen');
  }
  engineerPrompt() {
      console.log('engineer chosen')
  }

}
module.exports=Program;