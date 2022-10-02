// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown');
const { default: Choices } = require('inquirer/lib/objects/choices');

// TODO: Create an array of questions for user input
const questions = [
    {   
        message: 'Would you like to include a license?',
        name: 'license',
        type: 'list',
        choices: ['MIT', 'Apache', 'Mozilla', 'GNU']
    },
    {
        message: 'What is the title of your project?',
        name: 'title',
        type: 'input'
    },
    { 
        message: 'How would you describe this project?', 
        name: 'description',
        type: 'input'
    },
    {
        message:'How is this project installed?',
        name: 'installation',
        type: 'input'
    },
    {
        message: 'Usage information?',
        name: 'usage',
        type: 'input'
    },
    {
        message: 'Contribution guidelines?',
        name: 'contribution',
        type: 'input' 
    },
    {
        message: 'What are your instructions for testing?',
        name: 'testing',
        type: 'input'
    },
    {   
        message: 'Would you like to include a license?',
        name: 'license',
        type: 'list',
        choices: ['MIT', 'Apache', 'Mozilla', 'GNU']
    },];

// TODO: Create a function to write README file
//function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((data) => {
        console.log(data);
        const content = generateMarkdown(data);
        fs.writeFileSync(`${data.title}.md`, content)
        //console.log('Creating README file');
    })
}

// Function call to initialize app
init();
