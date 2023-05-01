const inquirer = require('inquirer');
const fs = require('fs');
const { Triangle, Circle, Square } = require('./Assets/shapes.js')
 

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
        type: 'input',
        name: 'color',
        message: 'Please choose text color for the logo'
    },
    {
        type: 'list',
        name: 'shape',
        choices: ['Circle', 'Triangle', 'Square']
    },
    
    {
        type: 'input',
        name: 'shapeColor',
        message: "What color would you like the chosen shape to be?",
        
        
    }
])
.then(({txt, color, shape, shapeColor}) => {
   var s;
    if (shape === 'Circle') {
    s = new Circle()
   } 
   else if (shape === 'Triangle') {
    s = new Triangle()
   }
   else if (shape === 'Square') {
    s = new Square()
   }

   s.setColor(shapeColor)
   
   
    var data = 
    `
   <svg version="1.1"
     width="300" height="200"
     xmlns="http://www.w3.org/2000/svg">
<rect width="300" height="200" fill="white"/>
  ${s.render()}



  <text x="150" y="115" font-size="45" text-anchor="middle" fill="${color}">${txt}</text>

</svg>`



    fs.writeFile("logo.svg", data, ()=> {
        console.log("Generated logo.svg");
    }
    )
})