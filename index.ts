#! /usr/bin/env node
//we are Importing Inquirer and Chalk Packages
import inquirer from "inquirer";
import chalk from "chalk";
import { log } from "console";

console.log(chalk.bold.underline.bgRed("\n WELCOME TO CODE WITH BUSHRA - CURRENCY CONVERTOR"));
console.log("=".repeat(60));

//Prompt the user to enter a sentence
let answers = await inquirer.prompt ([
    {
        name: "sentence",
        type: "input",
        message: "Enter a sentence",

    }
])

//Trimming the sentence and splitting it into words based on "spaces"
let words = answers.sentence.trim().split(" ");

//Analysis of user input sentence
console.log("=".repeat(60));
console.log(chalk.bold("- Sentence Words:"));
console.log(words);
console.log(chalk.bold(`\n - Word Count ${words.length}`));
console.log("=".repeat(60));
