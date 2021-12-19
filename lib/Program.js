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
    // starts program and gets manager info and builds manager object
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
        this.manager = new Manager(managerData.managerName,managerData.managerEmployeeId,managerData.managerEmail,managerData.officeNum)
        managerArr.push(this.manager);
        console.log(managerArr);
       return this.chooseEmployee();
    })
    .catch(err => {
        console.log(err);
    })
  }
  // asks wether you want to add intern or engineer or be done
  chooseEmployee() {
      inquirer.prompt({
          type: 'rawlist',
          name: 'empType',
          message: 'Do you wish to add an intern or an engineer or are you done?',
          choices: ['intern','engineer','done']
      }).then(choice => {
          if (choice.empType === 'intern') {
              return this.internPrompt();
          }
          else if (choice.empType === 'engineer') { 
          return this.engineerPrompt();
          }
          else if (choice.empType === 'done') {
              return this.teamGen();
          }
      })
      .catch(err => {
          console.log(err);
      })
  }
  // prompts for intern information and creates intern object
  internPrompt() {
      console.log('intern chosen');
  }
  // prompts for engineer info and creates engineer object
  engineerPrompt() {
      console.log('engineer chosen')
  }
 // passes info to the htmlgen "aka" template.js
  teamGen() {
      console.log('team generated');
  }

}
module.exports=Program;
