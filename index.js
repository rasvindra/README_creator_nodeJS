const fs = require("fs");
const inquirer = require("inquirer");
const createREADME = require("./utils/generateMarkdown")

function init(){
    inquirer.prompt ([
        {
            message: "what is the title of your Project?",
            type: "input",
            name: "projTitle",
        },
        {
            message: "Please describe your project in a few sentances.",
            type: "input",
            name: "projDescription",
        },
        {
            message: "Please provide the needed steps for any installation.",
            type: "input",
            name: "projInstall",
        },
        {
            message: "Please provide any Contribution Notes related to your application.",
            type: "input",
            name: "projContribute",
        },
        {
            message: "Please provide any notable Usage Information or Restrictions.",
            type: "input",
            name: "projUsage",
        },
        {
            message: "Please provide any relevant Test Data for your application.",
            type: "input",
            name: "projTest",
        },
        {
            message: "Please select your Apllication License from the list provided",
            type: "list",
            name: "projLicense",
            choices: ['MIT','MOZILLA','ISC','IBM','APACHE']
        },
        {
            message: "Please provide the Develeoper email(s) associated with the application.",
            type: "input",
            name: "devEmail",
        },
        {
            message: "Please provide the Develeoper Github Username(s) associated with the application.",
            type: "input",
            name: "devGithub",
        },

    ]).then ((ans) => {
        const engage = createREADME(ans)
        fs.writeFile('README.md', engage , function(err){
            if(err) console.log ("error", err)
        })
    })
}

init()