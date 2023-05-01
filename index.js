const fs = require('fs');
const inquirer = require('inquirer');
const generateLogo = require('./utils/generateMarkdown')

const questions = [
    {
        type: 'input',
        name: 'initials',
        message: 'Please put your initials for the logo you would like to create. (Up to 3 max)'
    },
    {
        type:' list',
        message:'Please choose a color for the text.',
        name: 'textColor',
        choices: ['Blue', 'Orange', 'Yellow', 'Green']
    },
    {
        type:' list',
        message:'Please choose a shape for the logo.',
        name: 'shape',
        choices: ['square', 'circle', 'triangle']
    },
    {
        type:' list',
        message:'Please choose a color for the shape.',
        name: 'shapeColor',
        choices: ['Blue', 'Orange', 'Yellow', 'Green']
    },
];

inquirer.prompt(questions).then((answer) => {
    fs.writeFile
})

function generateSVGFile(filename, data) {
    fs.writeFile(filename, data, (err) => {
        if (err) {
            console.error(err);
            return;
        } console.log(`Logo has been created and saved to ${filename}`);
    });
}

function init() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'filename',
            message: 'Please enter a filename for your logo (e.g. mylogo.svg):'
        },
        ...questions
    ])
    .then((data) => {
        const logo = generateLogo(data);
        generateSVGFile(data.filename, logo);
    })
    .catch((err)=> console.error(err));
}

init();
