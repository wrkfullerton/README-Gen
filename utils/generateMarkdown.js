function generateMarkdown(data) {
  return `
# ${data.title}
## ${data.desc}

## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Test](#test)
  * [Questions](#questions)
  * [License](#license)
  * [Badges](#badges)
 
  ## Installation
  ${data.install}
 
  ## Usage
  # ${data.usage}
  
  ## Contributing
  # ${data.contribution}
  
  ## Tests
  # ${data.test}

  ## Questions
  If you have any questions, contact ${data.username} on Github.
  
  ## License
  
`;
}

module.exports = generateMarkdown;