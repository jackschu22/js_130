// Create new folder 'npm_practce', initially empty
// Run `npm init` on command line
  // Input package name, version, description, main, author, license, etc
  // Creates `package.json`
    // Contains info about your project and its dependencies
    // Initially no dependencies
// Run `npm install eslint@7.12.1 eslint-cli babel-eslint --save-dev`
  // Updates `package.json` with `devDependencies` property
  // Creates `node_modules` folder
    // Contains the installed dependencies specified in `package.json`
    // Should be put in a `.gitignore` file as it has a very large memory requirement. There's no 
    // reason to store a separate duplicate copy of all those dependent modules in your own project.
  // Creates `package-lock.json`
    // Lists the exact versions of the packages that were used to build the latest version of the 
    // project so in the end there are no discrepancies between developers, users of your project, 
    // and what you used in the latest version. 

// https://lexicalmagazine.com/posts/The-Definitive-Guide-To-npm