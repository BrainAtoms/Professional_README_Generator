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

  switch (license) {
    case "MIT":
      link = "https://mit-license.org/";
      break;
    case "GPL":
      link = "https://www.gnu.org/licenses/gpl-3.0.en.html";
      break;
    case "Apache":
      link = "https://www.apache.org/licenses/LICENSE-2.0.html";
      break;
    case "MPL":
      link = "https://opensource.org/license/mpl-2-0/";
      break;
  }
  return link;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let section = "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
