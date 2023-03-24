// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "project title",
    message: "Enter the title of your project:"
  },
  {
    type: "input",
    name: "project description",
    message: "Enter a brief description of your project:"
  },
  {
    type: "input",
    name: "project installation",
    message: "Enter information on how users can install your project:"
  },
  {
    type: "input", 
    name: "project use",
    message: "Enter how your project is to be used by others:"
  },
  {
    type: "checkbox",
    name: "license",
    message: "Select a license for your project:",
    choices: ['MIT','GPL','Apache','MPL']
  },
  {
    type: "input",
    name: "contributions",
    message: "Enter whether contributions are welcome:"
  },
  {
    type: "input",
    name: "test",
    message: "Enter test instructions:"
  },
  {
    type: "input",
    name: "Username",
    message: "Enter your Github username:"
  },
  {
    type: "input",
    name: "email",
    message: "Enter your email:"
  }
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
}

// Function call to initialize app
init();
