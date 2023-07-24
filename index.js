// TODO: Include packages needed for this application
const genMd = require('./utils/generateMarkdown.js');
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: "What is your project title?"
    },
    {
        type: 'input',
        name: 'description',
        message: "What is your project description"
    },
    {
        type: 'input',
        name: 'install',
        message: "Installation instructions"
    },
    {
        type: 'input',
        name: 'usage',
        message: "How do you use this app?"
    },
    {
        type: 'input',
        name: 'contribution',
        message: "Who contributed?"
    },
    {
        type: 'input',
        name: 'test',
        message: "Tests"
    },
    {
        type: 'input',
        name: 'email',
        message: "What is your email"
    },
    {
        type: 'input',
        name: 'username',
        message: 'What is your username?'
    },
    {
        type: 'list',
        name: 'license',
        message: "What license do you wish to choose?",
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'none'],
    },
];

function writeToFile(readMe, data) {
    fs.writeFile(readMe, data, "utf-8", error => {
        if (error) {
            console.error("Unsuccessful");
        } else {
            console.log("Success!");
        }
    })
}

function init() {
    inquirer.prompt(questions).then((answers) => {
        let mkDown = genMd(answers);
        writeToFile("generatedREADME.md", mkDown);
    }).catch(error => {
        console.log(error);
    })

}

// Function call to initialize app
init();
