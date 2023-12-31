// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license != 'none') {
    license = license.split(" ").join("");
    return `license-${license}-yellow`;
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license != 'none') {
    return `https://img.shields.io/badge/${renderLicenseBadge(license)}`;
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license != 'none') {
    return `![Github license](${renderLicenseLink(license)})`
  } else {
    return '';
  }
}

// TODO: Create a function to generate markdown for README
// we put our readme inside this template literal ex. => data.description, data.usage, data.
function generateMarkdown(data) {
  return `# ${data.title}
  ## Description
  ${data.description}

  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [Contribution](#contribution)
  * [Test](#test)
  * [Contact](#contact)
  * [License](#license)

  ## Installation
  ${data.install}

  ## Usage
  ${data.usage}

  ## Contribution
  ${data.contribution}

  ## Test 
  ${data.test}

  ## Contact
  - Email: ${data.email}
  - Github: https://github.com/${data.username}

  ## License 
  ### ${data.license}
  ${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;
