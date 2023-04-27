const fs = require('fs');
const inquirer = require('inquirer');
const { default: Choice } = require('inquirer/lib/objects/choice');
const { default: Choices } = require('inquirer/lib/objects/choices');

const questions = [
    [
        type: 'input',
        name: 'initials',
        message: 'Please put your initials for the logo you would like to create.'
    ],
    [
        type:' list',
        name: 'initials-color',
        choices: [
            'Blue',
            'Orange',
            'Yellow',
            'Green',
            'Purple',
            'Pink',
            'Black',
            'White'
        ],
        message: 'Please choose a initials color.'
    ],
    [
        type:' list',
        name: 'shape',
        choices: [
            'rectangle',
            'circle',
            'triangle'
        ],
        message: 'Please choose a shape.'
    ],
    [
        type:' list',
        name: 'shape-color',
        choices: [
            'Blue',
            'Orange',
            'Yellow',
            'Green',
            'Purple',
            'Pink',
            'Black',
            'White'
        ],
        message: 'Please choose a shape color.'
    ],
];

