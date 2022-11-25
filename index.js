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
            message: "what is the title of your Project?",
            type: "input",
            name: "projTitle",
        },
        {
            message: "what is the title of your Project?",
            type: "input",
            name: "projTitle",
        },
        {
            message: "what is the title of your Project?",
            type: "input",
            name: "projTitle",
        },
        {
            message: "what is the title of your Project?",
            type: "input",
            name: "projTitle",
        },
        {
            message: "what is the title of your Project?",
            type: "input",
            name: "projTitle",
        },
        {
            message: "what is the title of your Project?",
            type: "input",
            name: "projTitle",
        },
        {
            message: "what is the title of your Project?",
            type: "input",
            name: "projTitle",
        },
        {
            message: "what is the title of your Project?",
            type: "input",
            name: "projTitle",
        },


    ]).then ((ans) => {
        const engage = createREADME(ans)
        fs.writeFile("README.md", engage , function(err){
            if(err) console.log ("error", err)
        })
    })
}

init()