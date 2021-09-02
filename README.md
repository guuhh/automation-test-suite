# automation-test-suite
Description:
Suite with acceptance and ui test scenarios

tack stack:
1. NodeJS - v14+
2. Cypress - v8+

Step-by-step to run the tests:

1. Install NodeJS version 14.x https://nodejs.org/en/
2. Install the Github: https://git-scm.com/
3. clone this repository to your machine
4. inside to folder ~/automation-test-suite
5. execute the command npm install, thu the cypress will be installed on your local project
6. still inside of the ~/automation-test-suite, execute the comand "npx cypress open" to open the cypress UI
7. execute the scenarios selecting the files on UI window or executing all files as according the image below.



Headless Mode:
1. at ~/automation-test-suite folder
2. execute the alias command "**npm run cy:run**", thus all spec files will be executed
3. if you prefer to choose a specif file, execute as "**npm run cy:run -- --record --spec "cypress/integration/[my_file]_spec.js**"


