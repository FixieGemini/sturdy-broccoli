// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        message: 'What is the title of your project?',
        name: 'title'
    },
    { 
        message: 'How would you describe this project?', 
        name: 'description'
    },
    {
        message:'How is this project installed?',
        name: 'installation'
    },
    {
        message: 'Usage information?',
        name: 'usage'
    },
    {
        message: 'Contribution guidelines?',
        name: 'contribution' 
    },
    {
        message: 'What are your instructions for testing?',
        name: 'testing'
    }];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
