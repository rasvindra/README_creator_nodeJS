
// Funtion that pulls badge image and renders to markdown based on user choice
// If there is no license, return an empty string
function createLicense(projLicense){
    const licensePic = {
        MIT:`[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`,
        MOZILLA:`[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`,
        ISC:`[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`,
        IBM:`[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)`,
        APACHE:`[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`,
    }
    return licensePic[projLicense]
}

// Main function that creates markdown file that creates links to all sections of markdown that correlate to table of contents
function createREADME(ans) {
    return `
    
# ${ans.projTitle}

${createLicense(ans.projLicense)}

## Table of Contents
* [Project Description](#description)
* [Installation](#install)
* [Contribution Notes](#contribution)
* [Usage Info](#usage)
* [Test Info](#test)
* [Contact Info](#contact)
* [Deployed Link](#deployed)
* [Screenshot](#screenshot)

## Description
${ans.projDescription}

## Install
${ans.projInstall}

## Contribution
${ans.projContribute}

## Usage
${ans.projUsage}

## Test
${ans.projTest}

## Contact
If you have any Questions or concerns please reach me via my E-mail or through GitHub <br/>
${ans.devEmail} <br/>
[${"github.com/"+ans.devGithub}](https://github.com/${ans.devGithub})

## Deployed
"Deployed Link goes here"

## Screenshot
"Screen shot goes here"
`;

}
// exports the function to create markdown file with users answers
module.exports = createREADME