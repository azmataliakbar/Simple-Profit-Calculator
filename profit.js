#! /usr/bin/env node
console.log(chalk.rgb(255, 195, 0).italic.bold.underline("\nNote: Profit on Investment will due for periods 3 / 6 / 12 Months after issuance date of Investment Certificate by bank.\n"));
function rainbowText(text) {
    const rainbowColors = [
        chalk.red.bold.italic,
        chalk.yellow.bold.italic,
        chalk.green.bold.italic,
        chalk.blue.bold.italic,
        chalk.magenta.bold.italic,
        chalk.cyan.bold.italic
    ];
    let coloredText = '';
    for (let i = 0; i < text.length; i++) {
        const color = rainbowColors[i % rainbowColors.length];
        coloredText += color(text[i]);
    }
    return coloredText;
}
const currentDateTime = new Date();
const currentDate = currentDateTime.toLocaleDateString();
const currentTime = currentDateTime.toLocaleTimeString();
console.log(rainbowText(`\nDate: ${currentDate} & Time: ${currentTime}`));
console.log();
console.log(chalk.yellowBright.italic.bold.underline("\n🟠🟢🔵  Welcome to My Investment's Profit Calculator 🔵🟢🟠\n"));
import chalk from "chalk";
import inquirer from "inquirer";
let investedAmount = await inquirer.prompt([
    {
        message: chalk.blueBright.italic.bold.underline("Enter Investment Amount Rs. "),
        type: "number",
        name: "amount",
        validate: function (value) {
            if (isNaN(value)) {
                console.log("\nInvalid entry. Please enter amount in digits only!!!");
                process.exit(1); // Exit the program with a non-zero status code
            }
            return true;
        }
    }
]);
let profit1 = 19.40;
let result1 = (investedAmount.amount / 100 * profit1) / 4;
console.log(chalk.rgb(255, 0, 255).italic.bold("\nProfit after 3 months will be for three months Rs. " + result1.toFixed(2)));
console.log(chalk.rgb(255, 195, 0).italic.bold("Remember profit % is 19.40 on your invested amount on basis of one year."));
console.log(chalk.rgb(255, 195, 0).italic.bold("Remember Tax will be deducted from profit, check your case filer / non-filer."));
console.log(chalk.greenBright.italic.bold("\nCase - 1"));
console.log(chalk.greenBright.italic.bold("15% Tax on profit for tax payer / filer."));
let tax1 = result1 / 100 * 15;
console.log(chalk.greenBright.italic.bold("\nIf 15% Tax is applied for filer Rs. " + tax1.toFixed(2)));
let newResult1 = result1 - tax1;
console.log(chalk.greenBright.italic.bold("So profit after deduction ( 15% tax ) will be = Rs. " + newResult1.toFixed(2)));
console.log(chalk.redBright.italic.bold("\nCase - 2"));
console.log(chalk.redBright.italic.bold("30% Tax on profit for non-tax payer / non-filer."));
let tax2 = result1 / 100 * 30;
console.log(chalk.redBright.italic.bold("\nIf 30% Tax is applied for non-filer Rs. " + tax2.toFixed(2)));
let newResult2 = result1 - tax2;
console.log(chalk.redBright.italic.bold("So profit after deduction ( 30% tax ) will be = Rs. " + newResult2.toFixed(2)));
console.log("\n---------------------------------------------------------------------------------------------------\n");
let profit2 = 19.38;
let result2 = (investedAmount.amount / 100 * profit2) / 2;
console.log(chalk.rgb(255, 0, 255).italic.bold("\nProfit after 6 months will be for six months Rs. " + result2.toFixed(2)));
console.log(chalk.rgb(255, 195, 0).italic.bold("Remember profit % is 19.38 on your invested amount on basis of one year."));
console.log(chalk.rgb(255, 195, 0).italic.bold("Remember Tax will be deducted from profit, check your case filer / non-filer."));
console.log(chalk.greenBright.italic.bold("\nCase - 1"));
console.log(chalk.greenBright.italic.bold("15% Tax on profit for tax payer / filer."));
let tax3 = result2 / 100 * 15;
console.log(chalk.greenBright.italic.bold("\nIf 15% Tax is applied for filer Rs. " + tax3.toFixed(2)));
let newResult3 = result2 - tax3;
console.log(chalk.greenBright.italic.bold("So profit after deduction ( 15% tax ) will be = Rs. " + newResult3.toFixed(2)));
console.log(chalk.redBright.italic.bold("\nCase - 2"));
console.log(chalk.redBright.italic.bold("30% Tax on profit for non-tax payer / non-filer."));
let tax4 = result2 / 100 * 30;
console.log(chalk.redBright.italic.bold("\nIf 30% Tax is applied for non-filer Rs. " + tax4.toFixed(2)));
let newResult4 = result2 - tax4;
console.log(chalk.redBright.italic.bold("So profit after deduction ( 30% tax ) will be = Rs. " + newResult4.toFixed(2)));
console.log("\n----------------------------------------------------------------------------------------------\n");
let profit3 = 19.00;
let result3 = (investedAmount.amount / 100 * profit3);
console.log(chalk.rgb(255, 0, 255).italic.bold("\nProfit after 12 months will be for one Year Rs. " + result3.toFixed(2)));
console.log(chalk.rgb(255, 195, 0).italic.bold("Remember profit % is 19.00 on your invested amount on basis of one year."));
console.log(chalk.rgb(255, 195, 0).italic.bold("Remember Tax will be deducted from profit, check your case filer / non-filer."));
console.log(chalk.greenBright.italic.bold("\nCase - 1"));
console.log(chalk.greenBright.italic.bold("15% Tax on profit for tax payer / filer."));
let tax5 = result2 / 100 * 15;
console.log(chalk.greenBright.italic.bold("\nIf 15% Tax is applied for filer Rs. " + tax5.toFixed(2)));
let newResult5 = result3 - tax5;
console.log(chalk.greenBright.italic.bold("So profit after deduction ( 15% tax ) will be = Rs. " + newResult5.toFixed(2)));
console.log(chalk.redBright.italic.bold("\nCase - 2"));
console.log(chalk.redBright.italic.bold("30% Tax on profit for non-tax payer / non-filer."));
let tax6 = result2 / 100 * 30;
console.log(chalk.redBright.italic.bold("\nIf 30% Tax is applied for non-filer Rs. " + tax6.toFixed(2)));
let newResult6 = result3 - tax6;
console.log(chalk.redBright.italic.bold("So profit after deduction ( 30% tax ) will be = Rs. " + newResult6.toFixed(2)));
