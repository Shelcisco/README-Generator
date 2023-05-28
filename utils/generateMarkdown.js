// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = ``
  if (license === `Apache`) {
    badge = `![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)`
  } else if (license === `BSD3`) {
    badge = `![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)`
  } else if (license === `GPLv2`) {
    badge = `![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)`
  } else if (license === `LGPL`) {
    badge = `![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)`
  } else if (license === `MIT`) {
    badge = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
  } else if (license === `MPL`) {
    badge = `![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)`
  } else {
    return badge
  }
  return badge
}




// function that returns the license link
// If there is no license, return an empty string

function renderLicenseLink(license) {
  let link = ``
  if (license === `Apache`) {
    link = `(https://opensource.org/licenses/Apache-2.0)`
  } else if (license === `BSD3`) {
    link = `(https://opensource.org/licenses/BSD-3-Clause)`
  } else if (license === `GPLv2`) {
    link = `(https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`
  } else if (license === `LGPL`) {
    link = `(https://www.gnu.org/licenses/lgpl-3.0)`
  } else if (license === `MIT`) {
    link = `(https://opensource.org/licenses/MIT)`
  } else if (license === `MPL`) {
    link = `(https://opensource.org/licenses/MPL-2.0)`
  } else {
    return link
  }
  return link
}

// function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let section = ``
  if (license !== `None`) {
    section = `## License
  This application is covered under the ${license} license. Click here [link]${renderLicenseLink(license)} for more details.`
  } else {
    return section
  }
  return section
}



// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}

## Description

${data.description}

## Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Contribution](#contribution)
* [Tests](#tests)
* [License](#license)
* [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

## License

${renderLicenseSection(data.license)}

${renderLicenseLink(data.license)}

## Contribution

${data.contribution}

## Tests

${data.tests}

## Questions

If you have any questions, feel free to reach out:

GitHub: [${data.github}](https://github.com/${data.github})

Email: ${data.email}
`;
}

module.exports = generateMarkdown;
