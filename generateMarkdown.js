// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
  return `![License](https://img.shields.io/badge/license-${data.license}-blue.svg)`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) {
  return `https://choosealicense.com/licenses/${data.license.toLowerCase()}`
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## ${data.description}

  ## ${data.installation}

  ## ${data.usage}

  ## ${data.contribution}

  ## ${data.testing}

  ${renderLicenseBadge(data)}

  ${renderLicenseLink(data)}

`;
}

module.exports = generateMarkdown;
