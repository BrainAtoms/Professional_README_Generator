// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  license
    ? (badge =
        "![License Badge](https://shields.io/badge/license-" +
        license +
        "-green)")
    : (badge = "");
  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let link;
  // returns link to license info based on license selected
  if ((license = "MIT")) {
    link = "https://mit-license.org/";
  } else if ((license = "GPL")) {
    link = "https://www.gnu.org/licenses/gpl-3.0.en.html";
  } else if ((license = "Apache")) {
    link = "https://www.apache.org/licenses/LICENSE-2.0.html";
  } else if ((license = "MPL")) {
    link = "https://opensource.org/license/mpl-2-0/";
  } else {
    link = "";
  }
  return link;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSect(license) {
  let licenseSect = "";

  // if a license has been selected, create License section
  // with link to license information
  if (license !== "None") {
    licenseSect +=
      "Get information about this license at " + renderLicenseLink(license);
  }
  return licenseSect;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `\n# ${data.title} \n## ${renderLicenseBadge(
    data.license
  )} \n## Description \n${
    data.description
  } \n## Table of Contents \n[Installation](#installation) \n[Usage](#usage) \n[License](#license) \n[Contributions](#contributions) \n[Tests](#tests) \n[Questions](#questions) \n## Installation \n${
    data.installation
  } \n## Usage \n${data.use} \n## License \n${data.license} \n${renderLicenseSect()} \n## Contributing \n${data.contributions} \n## Tests\n${
    data.test
  } \n## Questions \nFind me at [HERE](http://github.com/${
    data.username
  }) \nEmail me at ${data.email}

  `;
}

module.exports = generateMarkdown;
