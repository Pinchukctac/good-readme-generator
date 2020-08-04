// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # Title: ${data.title}

# Description: ${data.description}

# Table of Contents:
    [Installation](#Installation)
    [Licenses](#Licenses)
    [Usage](#Usage)
    [Contributing](#Contributions)
    [Commands](#Command Line Instructions)
    [Testing](#Testing)

# Github
    Github: https://github.com/${data.rmUser}

# Installation
    Installation instructions: ${data.installation}

# Usage
    Usage: ${data.usage}

# Contributions
    Contributing Guidelines: ${data.contributions}

# Testing
    Instructions to test this application: ${data.test}

# Licenses
    This application is covered under the license: ${data.license}

# Command Line Instructions
    Command Line Instructions to run application: 
    ${data.command}

# Questions
    Questions: Please contact me at ${data.email} with the subject line "ReadMe Questions" with any questions!
`;
}

module.exports = generateMarkdown;
