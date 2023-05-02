const inquirer = require('inquirer');
const fs = require('fs');
const { Triangle, Circle, Square } = require('./lib/shapes.js')
 

inquirer.prompt([
    {
        type: 'input',
        name: 'txt',
        message: 'Enter text: up to 3 characters only',
        validate: (input) => {
            if (input.length <= 3) {
            return true } else {
                return false
            }
        } 

    },
    {
        type: 'list',
        name: 'color',
        message: 'Please choose text color for the logo',
        choices: ['red', 'blue', 'white', 'black', 'green', 'orange', 'purple', 'pink']
    },
    {
        type: 'list',
        name: 'shape',
        choices: ['Circle', 'Triangle', 'Square']
    },
    
    {
        type: 'list',
        name: 'shapeColor',
        message: "What color would you like the chosen shape to be?",
        choices: ['red', 'blue', 'white', 'black', 'green', 'orange', 'purple', 'pink']
    }
])
.then(({txt, color, shape, shapeColor}) => {
   var shapes;
    if (shape === 'Circle') {
    shapes = new Circle()
   } 
   else if (shape === 'Triangle') {
    shapes = new Triangle()
   }
   else if (shape === 'Square') {
    shapes = new Square()
   }

   shapes.setColor(shapeColor)
   
   
    var data = 
    `
   <svg version="1.1"
     width="300" height="200"
     xmlns="http://www.w3.org/2000/svg">
<rect width="300" height="200" fill="white"/>
  ${shapes.render()}



  <text x="150" y="115" font-size="45" text-anchor="middle" fill="${color}">${txt}</text>

</svg>`



    fs.writeFile("logo.svg", data, ()=> {
        console.log("Generated logo.svg");
    }
    )
})
