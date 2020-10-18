const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const chalk = require("chalk");
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const render = require("./lib/htmlRenderer");
const renderMain = require("./lib/htmlRenderer");

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
const managerArr = [];
const engineerArr = [];
const internArr = [];
const start = () =>{
  inquirer
  .prompt([
    {
      type: "confirm",
      name: "choice",
      message: "Are you ready to set up your dev team ?",
    },
  ])
  .then((val) => {
    if (val.choice) {
      choiceOfRoles();
    } else {
      quit();
    }
  });
}

const choiceOfRoles = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "id",
        message: "What is the Employee's Id ... ?",
      },
      {
        type: "input",
        name: "name",
        message: "What is the Employee's name ... ?",
      },
      {
        type: "input",
        name: "email",
        message: "What is the Employee's email ... ?",
      },
      {
        type: "list",
        name: "roles",
        message: "Which Role would you like to add this team member to?",
        choices: ["Manager", "Engineer", "Intern"],
      },
    ])
    .then((val) => {
      // console.log(val);
      switch (val.roles) {
        case "Manager":
          manager(val);
          break;
        case "Engineer":
          engineer(val);
          break;
        case "Intern":
          intern(val);
          break;
        default:
          break;
      }
    });
}


const manager = (manager)=> {
  inquirer
    .prompt([
      {
        type: "input",
        name: "officeNum",
        message: "What is your office number ?",
      },
    ])
    .then((val) => {
       
      // console.log(manager.name + manager.roles + manager.id + manager.email);
      // name, employeeType, id, email
    const teamManager = new Manager(manager.name, manager.roles, manager.id ,manager.email,val.officeNum);
    managerArr.push(teamManager)
    render(managerArr);
    // console.log(renderMain(managerArr));
  
    });
}

const intern = (intern) => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "school",
        message: "What School do you attend ?",
      },
    ])
    .then((val) => {
      // console.log(val, intern);
      const teamIntern = new Intern(intern.name, intern.roles, intern.id ,intern.email,val.school);
      internArr.push(teamIntern);
      render(internArr);
      console.log(renderMain(internArr));

    });
}

const engineer = (engineer)=> {
  inquirer
    .prompt([
      {
        type: "input",
        name: "officeNum",
        message: "What is your git hub user name ?",
      },
    ])
    .then((val) => {
      // console.log(val, engineer);
      const teamEngineer = new Engineer(engineer.name, engineer.roles, engineer.id ,engineer.email,val.gitHub);
      engineerArr.push(teamEngineer);
      render(engineerArr);
      console.log(renderMain(engineerArr));
     


    });
}

start();





