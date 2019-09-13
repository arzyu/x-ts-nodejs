module.exports = {
  // How to write a question: https://github.com/SBoudrias/Inquirer.js#question
  questions: [
    {
      type: "input",
      name: "description",
      message: "Enter project description:",
      validate: input => {
        return /^[^"]+$/.test(input) && !input.endsWith("\\") || "Invalid description!";
      }
    }
  ],
  // How to use file glob: https://github.com/isaacs/node-glob#glob-primer
  files: [
    // answsers is the questions' answers, here is { description: "..." }
    // options is a json object provided by create-x, a fixed structure:
    //  {
    //           repo: "repository url of template"
    //    destination: "/path/to/project-dir",
    //      directory: "project-dir",
    //  }
    ["package*.json", (answers, options) => ({
      name: options.directory,
      description: answers.description
    })],
    ["README.md", (answers, options) => ({
      name: options.directory,
      repo: options.repo
    })]
  ]
};
