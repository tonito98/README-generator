
// Packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
import {generateMarkdown} from './utils/generateMarkdown.js'


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
       },
       {
            type: "input",
            name: 'installation',
            message: 'What are the steps required to install your project?'
       },
       {
            type: 'input',
            name: 'usage',
            message: 'Explain how to use the program. Provide instructions and examples.'
       },
       {
            type: 'input',
            name: 'contributors',
            message: 'Who were your collaborators? Enter their Github username.If you had none hit enter.'
       },
       {
            type: 'list',
            name: 'license',
            message: `What license do you choose for your project?
           - The MIT License lets people do almost anything with your project including making and distributing closed source versions.
           - The GNU GPLv3 License allows others to use your software except to create and distribute closed source versions. 
           - Some communities prefer a particular license.
              - Apache requires Apache License 2.0.
              - npm packages use the MIT or ISC License.
              - OpenBSD prefers ISC license.`,
            choices: ["MIT","GNU GPLv3","ISC","Apache License 2.0"]
       },
       {
        type:"input",
        name: 'username',
        message: 'What is your GitHub username? In case others have questions.',
       },
       {
        type:"input",
        name: 'email',
        message: 'What is your email? In case others have questions.',
       }, 
];
    

// A function that writes a README file

function writeToFile(fileName, data) {
fs.writeFile('README.md', generateMarkdown(data), err=> {
   if(err) throw err;
   
   console.log('README file created!');
});
}

//  A function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(function(answers) {
            console.log(answers);
        const fileName = generateMarkdown(answers);
        writeToFile(fileName, answers)
        });
};

// A function call to initialize app
 
init();
