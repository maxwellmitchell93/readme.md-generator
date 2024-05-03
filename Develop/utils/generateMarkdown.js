// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  
    if (license !== "none") {
      return `![Github license](https://img.shields.io/badge/license-${license}-blue.svg)`;
    }
    return "";
  
}

// Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'MIT':
        return 'https://opensource.org/licenses/MIT';
    case 'Apache 2.0':
        return 'https://www.apache.org/licenses/LICENSE-2.0';
    case 'GPL 3.0':
        return 'https://www.gnu.org/licenses/gpl-3.0.en.html';
    // Add more cases for other licenses as needed
    default:
        return '';
}
 

}

// Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  switch (license) {
    case 'MIT':
        return `
## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
        `;
    case 'Apache 2.0':
        return `
## License

This project is licensed under the [Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0).
        `;
    case 'GPL 3.0':
        return `
## License

This project is licensed under the [GNU General Public License v3.0](https://www.gnu.org/licenses/gpl-3.0.en.html).
        `;
    // Add more cases for other licenses as needed
    default:
        return '';
}
}
 

// Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} 
  ## Description
  ${data.description}
  ## Deployed Application URL
  ${data.deploymentLink}
  ## Table of Contents
  * [Instalation](#instalation)
  * [Languages & Dependencies](#languagesanddependencies)
  * [Usage](#Usage)
  * [Credits](#Credits)
  * [License](#Licnese)
  * [Badges](#Badges)
  * [Features](#features)
  * [How to contribute](#contribute)
  * [Tests](#tests)
  * [Questions](#questions)
  ## Instalation
  ${data.instalation}
  ## Languages & Dependencies
  ${data.require}
  ## Usage
  ${data.usage}
  ## Credits
  ${data.credits}
  ## License
  ${renderLicenseBadge(data.license)}
  ## Badges
  ${data.badges}
  ## Features
  ${data.features}
  ## How to contribute
  ${data.contribute}
  ## Tests
  ${data.test}
  ## Questions
  Please email your questions [here](mailto:${data.email}?subject=[GitHub]%20Dev%20Connect) or visit [github/${data.githubUser}](https://github.com/${data.githubUser}).
  `;
  }


module.exports = generateMarkdown;
