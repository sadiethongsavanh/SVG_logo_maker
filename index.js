let data = ""
// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [ {
    name: 'text',
    message: 'What would you want to put on your SVG file?',
    // TODO: "validate user input greater than three letters"
  },
  {
    name: 'text_color',
    message: 'What color do you like your SVG file?',
  },
  {
    type: 'list',
    name: 'shape',
    message: 'What shape do you want?',
    choices: [
    'circle',
    'triangle',
    'square',
    ],
  },
  {
    name: 'shapes_color',
    message: 'What shape color do you want?',
  },
];
// TODO: Create a function to initialize app
function init() {

    inquirer
    .prompt(questions)
    .then(answers => {
      console.log("answers",answers);
    }).catch(err => {
      console.log(err)
    })
}

// Function call to initialize app
init();
