import inquirer from 'inquirer';
import chalk from 'chalk';
import chalkAnimation from 'chalk-animation';
const sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 2000);
    });
};
async function welcome() {
    let pulseAnimation = chalkAnimation.neon('Welcome to Adventure Game!');
    await sleep();
    pulseAnimation.stop();
    console.log(`
                                             
    .d88b.      8888b.     88888b.d88b.      .d88b. 
    d88P"88b        "88    b888 "888 "88    bd8P  Y8b      
    888  888    .d88888    8888  888  88    888888888 
    Y88b 888    888  88    8888  888  88    8Y8b.       
     "Y88888    "Y88888    8888  888  88     "Y8888.  
         888                                      
    Y8b d88P                                      
     "Y88P"                                          
 `);
}
await welcome();
// Prompt user to select character
inquirer
    .prompt([
    {
        type: 'list',
        name: 'character',
        message: 'Select your character:',
        choices: ['Hero', 'Villain'],
    },
])
    .then((answers) => {
    const player = answers.character;
    console.log(`You have selected ${player}`);
    // Generate random health value for player
    function generateHealth() {
        return Math.floor(Math.random() * 100) + 1;
    }
    // Set player's health and power/potion
    let playerHealth = generateHealth();
    let playerPower = 1000;
    // Game loop
    function gameLoop() {
        inquirer
            .prompt([
            {
                type: 'list',
                name: 'action',
                message: 'What do you want to do?',
                choices: ['Attack', 'Defend'],
            },
        ])
            .then((answers) => {
            if (answers.action === 'Attack') {
                // Generate random damage value
                const damage = Math.floor(Math.random() * 100) + 1;
                playerHealth -= damage;
                console.log(chalk.red(`You attacked and dealt ${damage} damage!`));
            }
            else {
                // Generate random defense value
                const defense = Math.floor(Math.random() * 100) + 1;
                playerPower -= defense;
                console.log(chalk.blue(`You defended and blocked ${defense} damage!`));
            }
            // Generate random damage value for opponent
            const opponentDamage = Math.floor(Math.random() * 100) + 1;
            playerPower -= opponentDamage;
            console.log(chalk.yellow(`Your opponent attacked and dealt ${opponentDamage} damage!`));
            // Display updated health values
            console.log(chalk.green(`Your health: ${playerHealth}`));
            console.log(chalk.green(`Opponent's health: ${playerPower}`));
            // Check if game is over
            if (playerHealth <= 0) {
                console.log(chalk.red('You are dead! Game over.'));
                chalkAnimation.rainbow('Better luck next time!').stop();
            }
            else if (playerPower <= 0) {
                console.log(chalk.green('Congratulations! You won!'));
                chalkAnimation.rainbow('You are the champion!').stop();
            }
            else {
                gameLoop();
            }
        });
    }
    // Start game loop
    gameLoop();
});
// Prompt user to select character
inquirer
    .prompt([
    {
        type: 'list',
        name: 'character',
        message: 'Select your character:',
        choices: ['Hero', 'Villain'],
    },
])
    .then((answers) => {
    const player = answers.character;
    console.log(`You have selected ${player}`);
    // Generate random health value for player
    function generateHealth() {
        return Math.floor(Math.random() * 100) + 1;
    }
    // Set player's health and power/potion
    let playerHealth = generateHealth();
    let playerPower = 1000;
    // Game loop
    function gameLoop() {
        inquirer
            .prompt([
            {
                type: 'list',
                name: 'action',
                message: 'What do you want to do?',
                choices: ['Attack', 'Defend'],
            },
        ])
            .then((answers) => {
            if (answers.action === 'Attack') {
                // Generate random damage value
                const damage = Math.floor(Math.random() * 100) + 1;
                playerHealth -= damage;
                console.log(chalk.red(`You attacked and dealt ${damage} damage!`));
            }
            else {
                // Generate random defense value
                const defense = Math.floor(Math.random() * 100) + 1;
                playerPower -= defense;
                console.log(chalk.blue(`You defended and blocked ${defense} damage!`));
            }
            // Generate random damage value for opponent
            const opponentDamage = Math.floor(Math.random() * 100) + 1;
            playerPower -= opponentDamage;
            console.log(chalk.yellow(`Your opponent attacked and dealt ${opponentDamage} damage!`));
            // Display updated health values
            console.log(chalk.green(`Your health: ${playerHealth}`));
            console.log(chalk.green(`Opponent's health: ${playerPower}`));
            // Check if game is over
            if (playerHealth <= 0) {
                console.log(chalk.red('You are dead! Game over.'));
                chalkAnimation.rainbow('Better luck next time!').stop();
            }
            else if (playerPower <= 0) {
                console.log(chalk.green('Congratulations! You won!'));
                chalkAnimation.rainbow('You are the champion!').stop();
            }
            else {
                gameLoop();
            }
        });
    }
    // Start game loop
    gameLoop();
});
