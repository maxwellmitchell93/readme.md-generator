// TODO: Include packages needed for this application
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown.js");
const inquirer = require('inquirer');
const path = require('path');


// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "Add a short description for your prject.",
  },
 
  {
    type: "input",
    name: "deploymentLink",
    message: "Please provide a URL where a user can access your deployed application."
  },
  {
    type: "input",
    name: "instalation",
    message: "Please provide steps for instalation."
  },
  {
    type: "checkbox",
    name: "license",
    message: "Please select a license applicable to this project.",
    choices: ["MIT", "APACHE2.0", "Boost1.0", "MPL2.0", "BSD2", "BSD3", "none"],
  },
  {
    type: "input",
    name: "badges",
    message: "Provide badge link"
  },
  {
    type: "input",
    name: "require",
    message: "List any project dependencies here.",
  },
  {
    type: "input",
    name: "features",
    message: "What are some features about your project?",
  },
  {
    type: "input",
    name: "usage",
    message: " Provide instructions and examples for use. Include screenshots as needed. To add a screen shot, create an assets/images folder in your repo and upload your screenshot to it. Then using the relative file path, add it to your README using the following syntax: ![alt text] (assets/images/screenshot.png)"
      
  },
  {
    type: "input",
    name: "credits",
    message: "List your collaborators, if any, with links to their GitHub profiles."


  },
  {
    type: "input",
    name: "githubUser",
    message: "What is your Github Username?",
  },
  {
    type: "input",
    name: "email",
    message: "Provide a valid email address.",
  },
  {
    type: "input",
    name: "contribute",
    message: "Explain how to contribute to your project.",
    
  },
  {
    type: "input",
    name: "test",
    message: "Provide a walkthrough of required tests if applicable.",
  },
];



// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}






// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    console.log("Generating your README.md...");
    //FIX File path
    writeToFile("./Generated_README.md/README.md", generateMarkdown({ ...answers }));
  });
}
// Function call to initialize app
init();
