//These two lines of code import the "inquirer" and "fs" modules into a Node.js application, allowing the program to prompt the user for input and interact with the file system.
const inquirer = require("inquirer");
const fs = require("fs");

//These lines of code import the Employee, Manager, Engineer, and Intern classes from the "lib" folder, as well as the generateHtml function from the "utils" folder, which are likely being used to build an HTML page for a software application or website.
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const generateHtml = require("./utils/generatehtml");

//This line of code declares an empty array called "employees", which can be used to store and manipulate data related to employee records in a program or application.
const employees = [];


//This line of code declares a function called "writeToFile" that takes in two parameters: "fileName" (a string representing the name of the file to be written to) and "data" (the data to be written to the file). The function is likely being used to write data to a file in a Node.js application.
function writeToFile(fileName, data) {

    fs.writeFile(fileName, generateHtml(employees), (err) =>
    err ? console.error(err) : console.log("index.html successfully created!")
  );
}

//These lines of code define an array called "managerQuestions" that contains a series of objects representing questions to be asked to a user in a command-line interface. The questions are related to a manager's personal information, including their first and last name, ID, email address, and office number. The questions are likely being used to collect data to create a new manager object in a software application or website.
const managerQuestions = [
    {
      type: "input",
      message: "What is your first name?",
      name: "firstName",
    },
  
    {
      type: "input",
      message: "What is your last name?",
      name: "lastName",
    },
  
    {
      type: "input",
      message: "What is your ID?",
      name: "id",
    },
  
    {
      type: "input",
      message: "What is your email address?",
      name: "email",
    },
  
    {
      type: "input",
      message: "What is your office number?",
      name: "office",
    },
  ];
  
  
//This code prompts the user with questions from the "managerQuestions" array using the "inquirer" module, creates a new "Manager" object from the user's answers, adds the object to an "employees" array, and calls the "askPromptQuestions" function to continue gathering data. The use of ".then" indicates that this is an asynchronous function that uses a Promise to handle the user's responses.
function init() {
    inquirer.prompt(managerQuestions).then((answers) => {
      const manager = new Manager(
        answers.firstName + " " + answers.lastName,
        answers.id,
        answers.email,
        answers.office
      );
      employees.push(manager);
      return askPromptQuestions();
    });
  }
  
  const mainQuestions = [
    {
      type: "list",
      message: "Which kind of employee would you like to add",
      choices: ["Intern", "Engineer", "Exit"],
      name: "employeeType",
    },
  ];
  // function to ask prompt questions for intern, engineer, manager based on answers of main question
  function askPromptQuestions() {
    inquirer
      .prompt(mainQuestions)
  
      // data = giant object (answers from input)
      .then((answers) => {
        // console.log(answers);
        if (answers.employeeType === "Intern") {
          promptInternQuestions();
        }
        if (answers.employeeType === "Engineer") {
          promptEngineerQuestions();
        }
        if (answers.employeeType === "Exit") {
          exit();
          // end program when select exit
        }
      });
  }
  
  // function to prompt intern questions
  function promptInternQuestions() {
    // 4 questions: intern’s name, ID, email, and school
    const internQuestions = [
      {
        type: "input",
        message: "What is your intern's first name?",
        name: "firstName",
      },
  
      {
        type: "input",
        message: "What is your intern's last name?",
        name: "lastName",
      },
  
      {
        type: "input",
        message: "What is your intern's ID?",
        name: "id",
      },
  
      {
        type: "input",
        message: "What is your intern's email address?",
        name: "email",
      },
  
      {
        type: "input",
        message: "What is your intern's school?",
        name: "school",
      },
    ];
    inquirer.prompt(internQuestions).then((answers) => {
      const intern = new Intern(
        answers.firstName + " " + answers.lastName,
        answers.id,
        answers.email,
        answers.school
      );
      
      employees.push(intern);
      return askPromptQuestions();
    });
  }
  
  // function to prompt engineer questions
  function promptEngineerQuestions() {
    // name, ID, email, and GitHub username
    const engineerQuestions = [
      {
        type: "input",
        message: "What is your engineer's first name?",
        name: "firstName",
      },
  
      {
        type: "input",
        message: "What is your engineer's last name?",
        name: "lastName",
      },
      {
        type: "input",
        message: "What is your engineer's ID?",
        name: "id",
      },
      {
        type: "input",
        message: "What is your engineer's email address?",
        name: "email",
      },
  
      {
        type: "input",
        message: "What is your engineer's Github username?",
        name: "github",
      },
    ];
    inquirer.prompt(engineerQuestions).then((answers) => {
      const engineer = new Engineer(
        answers.firstName + " " + answers.lastName,
        answers.id,
        answers.email,
        answers.github
      );
      employees.push(engineer);
      return askPromptQuestions();
    });
  }
  
  
  //This code defines a function called "exit" that calls the "writeToFile" function with the filename "index.html" and the data stored in the "employees" array. This function is likely being used to save the employee data to an HTML file before the program is exited. The code does not return any value and is relatively simple.
  function exit() {
    writeToFile("index.html", employees);
  }
  
  
  // function to ask prompt questions for intern, engineer, manager
  init();
