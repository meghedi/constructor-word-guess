const word = require("./word");
const inquirer = require("inquirer");

let userPrompt = inquirer.prompt([
    {
        name : "guessedWord", 
        message: "Guess a letter?"
    }
]).then(function(anwers){
    console.log(anwers.guessedword);
});