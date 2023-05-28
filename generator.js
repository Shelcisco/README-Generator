const inquirer = require('inquirer')
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown");
// const { message }  = require ('statuses');

//inquirer to generate questions
const questions =
    [
        {
            
          type: 'input',
          message:"What's the project title?",
          name:'title',
          //validate property to check the user provided input
        //   validate: (value)=>{ if(value){return true} else {return 'Please input answer to continue'}},
          },

          {
              type: 'input',
              message:"Please describe your project",
              name:'description',
              //validate property to check the user provided input
            //   validate: (value)=>{ if(value){return true} else {return 'Please input answer to continue'}},    
          },

          {
            type: 'input',
            message:"Table of contents will update after all inputs are received, please press enter to continue",
            name:'contents', 
          },

          {
              type: 'input',
              message:"Please provide installation instructions",
              name:'installation',
              //validate property to check the user provided input
              validate: (value)=>{ if(value){return true} else {return 'Please input answer to continue'}},    
          },

          {
              type: 'input',
              message:"How is your project used?",
              name:'usage',
              //validate property to check the user provided input
              validate: (value)=>{ if(value){return true} else {return 'Please input answer to continue'}},    
          },

          {
              type: 'input',
              message:"Please list contributors",
              name:'contribution',
              //validate property to check the user provided input
              validate: (value)=>{ if(value){return true} else {return 'Please input answer to continue'}},    
          },

          {
            type: 'input',
            message:"Please provide test instructions",
            name:'tests',
            //validate property to check the user provided input
            validate: (value)=>{ if(value){return true} else {return 'Please input answer to continue'}},    
          },

          {
              type: 'list',
              message:"Please choose a license",
              name:'license',
              choices: ['None', 'Apache License 2.0', 'GNU General Public License v3.0', 'MIT License', 'BSD 2-Clause "Simplified" License', 'BSD 3-Clause "New" or "Revised" License', 'Boost Software License 1.0', 'Creative Commons Zero v1.0 Universal', 'Eclipse Public License 2.0', 'GNU Affero General Public License v3.0', 'GNU General Public License v2.0', 'GNU Lesser General Public License v2.1', 'Mozilla Public License 2.0', 'The Unlicense'],
              //validate property to check the user provided input
              validate: (value)=>{ if(value){return true} else {return 'Please select option to continue'}},   
          },

          {
              type: 'input',
              message:"What's your Github username?",
              name:'github',
              //validate property to check the user provided input
              validate: (value)=>{ if(value){return true} else {return 'Please input answer to continue'}},    
          },

          {
              type: 'input',
              message:"What's your email address?",
              name:'email',
              //validate property to check the user provided input
              validate: (value)=>{ if(value){return true} else {return 'Please input answer to continue'}},    
          },

        
      
        ];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err)
            throw err;
            console.log('Success! Your README has been generated')
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(data => {
        console.log(data)
        writeToFile("SampleREADME.md", generateMarkdown(data));
    });
}

// Function call to initialize app
init();

// ).then (({
//   Title,
//   Description,
//   Contents,
//   Installation,
//   Usage,
//   Contribution,
//   Test,
//   License,
//   Github,
//   Email

// })=>
// {
//     const template =`# ${Title}


// ## Description
// ${Description}
// ## Contents
// * [Description](#description)
// * [Installation](#installation)
// * [Usage](#usage)
// * [Contribution](#contribution)
// * [Test](#test)
// * [License](#license)
// * [Questions](#questions)
// ## Installation
// ${Installation}
// ## Usage
// ${Usage}
// ## Contribution
// ${Contribution}
// ## Test
// ${Test}
// ## License
// ${License}

// ## Questions
// * Github: ${Github}
// * Email: ${Email}`;
    
//     createNewFile(Title,template);
// }
// );

// function createNewFile(generator,data){

//     fs.writeFile(`${generator.toLowerCase().split(' ').join('')}.md`,data,(err)=>{
// if(err){
//     console.log(err)
// }
// console.log ('Your README has been generated');
// })

// }