// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
export function renderLicenseBadge(license) {
  let licenseBadge = [];
  if(license === 'Apache License 2.0') {
    licenseBadge = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0'
  } else if (license === 'MIT') {
    licenseBadge = '[![License: MIT](https://img.shields.io/badge/Licesnse-MIT-lellow.svg)](https://opensousource.org/licenses/MIT)'
  } else if (license === 'GNU GPLv3'){
    licenseBadge = '[![License: GNU GPLv3](https://img.shields.io/badge/License-GNU%20General%20Public%20License%20v3.0-pink)](https://opensource.org/licenses/GPL-3.0'
  } else if (license ==='ISC') {
    licenseBadge = '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)'
  } else {
    licenseBadge = []
  } return licenseBadge;
}

// A function that returns the license link
// If there is no license, return an empty string
export function renderLicenseLink(license) {
  let licenseLink = [];
  if(license === 'Apache License 2.0') {
    licenseLink = ''
  } else if (license === 'ISC') {
    licenseLink = ''
  } else if (license === 'MIT') {
    licenseLink = ''
  } else if (license === 'GNU GPLv3') {
    licenseLink = ''
  } return licenseLink;
}

// A function that returns the license section of README
// If there is no license, return an empty string
export function renderLicenseSection(license) {
  let licenseSection = [];
  if(license === 'Unlicensed') {
    licenseSection = []
  } else {
    licenseSection =
    `License: ${license}`
  } return licenseSection
}

// A function to generate markdown for README
export function generateMarkdown(data) {
  return `
  # ${data.projectName}

## Description

${data.description}

## Table of Contents 

If your README is long, add a table of contents to make it easy for users to find what they need.

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Questions](#questions)

## Installation

What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.

${data.installation}
## Usage

Provide instructions and examples for use. Include screenshots as needed.

${data.usage}
To add a screenshot, create an assets/images folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:

    
    ![alt text](assets/images/screenshot.png)
    

## Credits

List your collaborators, if any, with links to their GitHub profiles.

If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.

If you followed tutorials, include links to those here as well.

${data.contributors}
## License

 This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).

 ${renderLicenseSection(data.license)}
 ${renderLicenseLink(data.license)}
 ${renderLicenseBadge(data.license)}

 ## Questions
Username: ${data.username}
Email Address: ${data.email}
---

🏆 The previous sections are the bare minimum, and your project will ultimately determine the content of this document. You might also want to consider adding the following sections.

## Badges

![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)

Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.

## Features

If your project has a lot of features, list them here.

## How to Contribute

If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.

## Tests

Go the extra mile and write tests for your application. Then provide examples on how to run them here.

`;
}

