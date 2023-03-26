// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "Enter the title of your project:",
  },
  {
    type: "input",
    name: "description",
    message: "Enter a brief description of your project:",
  },
  {
    type: "input",
    name: "installation",
    message: "Enter information on how users can install your project:",
  },
  {
    type: "input",
    name: "use",
    message: "Enter how your project is to be used by others:",
  },
  {
    type: "checkbox",
    name: "license",
    message: "Select a license for your project:",
    choices: ["None", "MIT", "GPL", "Apache", "MPL"],
  },
  {
    type: "input",
    name: "contributions",
    message: "Enter whether contributions are welcome:",
  },
  {
    type: "input",
    name: "test",
    message: "Enter test instructions:",
  },
  {
    type: "input",
    name: "username",
    message: "Enter your Github username:",
  },
  {
    type: "input",
    name: "email",
    message: "Enter your email:",
  },
];

// TODO: Create a function to write README file

function writeToFile(data) {
  let fileName = "./README.md";
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      return console.log(err);
    }

    console.log("Your README file has been generated!");
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then((answers) => writeToFile(generateMarkdown(answers)));
}

// Function call to initialize app
init();
