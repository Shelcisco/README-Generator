const inquirer = require('inquirer')
const fs = require('fs');
// const { message }  = require ('statuses');

//inquirer to generate questions
inquirer.prompt(
    [
        {
            
          type: 'input',
          message:"What's the project title?",
          name:'Title',
          //validate property to check the user provided input
          validate: (value)=>{ if(value){return true} else {return 'Please input answer to continue'}},
          },
          {
              type: 'input',
              message:"Please describe your project",
              name:'Description',
              //validate property to check the user provided input
              validate: (value)=>{ if(value){return true} else {return 'Please input answer to continue'}},    
          },

          {
              type: 'input',
              message:"Please provide installation instructions",
              name:'Installation',
              //validate property to check the user provided input
              validate: (value)=>{ if(value){return true} else {return 'Please input answer to continue'}},    
          },

          {
              type: 'input',
              message:"How is your project used?",
              name:'Usage',
              //validate property to check the user provided input
              validate: (value)=>{ if(value){return true} else {return 'Please input answer to continue'}},    
          },

          {
              type: 'input',
              message:"Please list contributors",
              name:'Contribution',
              //validate property to check the user provided input
              validate: (value)=>{ if(value){return true} else {return 'Please input answer to continue'}},    
          },

          {
              type: 'input',
              message:"What's the project title?",
              name:'Test',
              //validate property to check the user provided input
              validate: (value)=>{ if(value){return true} else {return 'Please input answer to continue'}},    
          },

          {
              type: 'list',
              message:"Please choose a license",
              name:'License',
              choices: ['None', 'Apache License 2.0', 'GNU General Public License v3.0', 'MIT License', 'BSD 2-Clause "Simplified" License', 'BSD 3-Clause "New" or "Revised" License', 'Boost Software License 1.0', 'Creative Commons Zero v1.0 Universal', 'Eclipse Public License 2.0', 'GNU Affero General Public License v3.0', 'GNU General Public License v2.0', 'GNU Lesser General Public License v2.1', 'Mozilla Public License 2.0', 'The Unlicense'],
              //validate property to check the user provided input
              validate: (value)=>{ if(value){return true} else {return 'Please select option to continue'}},   
          },

          {
              type: 'input',
              message:"What's your Github username?",
              name:'Github',
              //validate property to check the user provided input
              validate: (value)=>{ if(value){return true} else {return 'Please input answer to continue'}},    
          },

          {
              type: 'input',
              message:"What's your email address?",
              name:'Email',
              //validate property to check the user provided input
              validate: (value)=>{ if(value){return true} else {return 'Please input answer to continue'}},    
          },

        
      
  ]
).then (({
  Title,
  Description,
  Installation,
  Usage,
  Contribution,
  Test,
  License,
  Github,
  Email

})=>
{
    const template =`# ${Title}

 
    ##Description
    ${Description}
    ##Installation
    ${Installation}
    ##Usage
    ${Usage}
    ##Contribution
    ${Contribution}
    ##Test
    ${Test}
    ##License
    ${License}

    ## Questions
    * Github ;${Github}
    * Email ;${Email}`;
    
    createNewFile(Title,template);
}
);

function createNewFile(generator,data){

    fs.writeFile(`${generator.toLowerCase().split(' ').join('')}.md`,data,(err)=>{
if(err){
    console.log(err)
}
console.log ('Your README has been generated');
})

}