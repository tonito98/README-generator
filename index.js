// TODO: Include packages needed for this application
import inquirer from 'inquirer';

console.log('Hello esse')
// TODO: Create an array of questions for user input
const questions = [];
const promptReadme = (readmeData) => {
    // If there's no "Readme" array property, create one
    // if(!readmeData.questions){
    //     readmeData.questions = [];
    // }
    // readmeData.questions =[]
    return inquirer.prompt([
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
            message: `Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:
            - What was your motivation?
            - Why did you build this project?
            - What problem does it solve?
            - What did you learn?`,
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('Please enter a description!');
                    return false;
                }
            }
       } 
    ])
    .then(readmeData => {
        // readmeData.questions.push(readmeData)
        // return readmeData;
        console.log(readmeData);
    });
};

promptReadme()

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
