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