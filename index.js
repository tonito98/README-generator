// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
// import generateMarkdown from './utils/generateMarkdown';
import {generateMarkdown} from './utils/generateMarkdown.js'


console.log('Hello esse')
// TODO: Create an array of questions for user input
const questions = [
       {
            type: 'input',
            name: 'projectName',
            message: 'What is the name of your project?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter a project name!');
                    return false;
                }
            }
            
       },
       {
        type: 'input',
            name: 'description',
            message:`
            Provide a short description explaining the what, why, and how of your 
            project. Use the following questions as a guide:
            - What was your motivation?
            - Why did you build this project?
            - What problem does it solve?
            - What did you learn?
            
            `,
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('Please enter a description!');
                    return false;
                }
            }
       } 
];

// promptReadme()
    

// TODO: Create a function to write README file
// const writeToFile = (nameInput, descriptionInput) => {
//     return `


function writeToFile(fileName, data) {
fs.writeFile('README.md', generateMarkdown(data), err=> {
   if(err) throw err;
   
   console.log('README file created!');
});
}

// // TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(function(answers) {
            console.log(answers);
        const fileName = generateMarkdown(answers);
        writeToFile(fileName, answers)
        });
};

// // Function call to initialize app
init();
