#! /usr/bin/env node


import inquirer from "inquirer";
import chalk    from "chalk";

console.log(chalk.green.italic`\n\t-----------------
                                    WELCOME TO MY CLI GUESSING GAME 
                                                                        -----------------------------------\n`)
do{
const randomNumber = Math.floor ( Math.random () * 7 + 1 );

const answers = await inquirer.prompt ([
    {
        name: "userGuessedNumber",
        type: "number",
        message: chalk. yellowBright("Please guess a number between 1-7:"),
        
    },
    ]);
if(answers.userGuessedNumber===randomNumber) {
    console.log (chalk.bgMagentaBright("Congratulation ! you guessed  right number."));
} else {
     console.log(chalk.red("you guessed wrong number"));
}


let ans = await inquirer . prompt([
    {
      name: 'continue',
      type: 'confirm',
      message: (chalk.bold.whiteBright.bold('Do you want to again continue?')),
      default:true
        
    }
  ]);
  if (ans.continue === false ){
    console.log(chalk.green('you excited from cli guessing - number ...\n Goodbye have a nice day ...\n\t'));
    break;
  }
  }while(true)
  
  
  
  
    
    /*git init
    git add README.md
    git commit -m "first commit"
    git branch -M main
    git remote add origin https://github.com/sumbulNaz8/word-counter.git
    git push -u origin main*/