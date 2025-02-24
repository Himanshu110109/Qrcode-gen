const QRCode = require("qrcode");
const inquirer = require("inquirer").default;
const fs = require("fs");
const terminalImage = require("terminal-image").default;
const chalk = require("chalk").default;

async function generateQR(text){
    try{
        let qr = await QRCode.toString(text, {type:"terminal"});
        //console.log(chalk.green(qr));
        await QRCode.toFile("qrcode.png", text);
        const imageBuffer = fs.readFileSync("qrcode.png");
        console.log(qr);
        console.log("qrcode generated successfully ('saved as qrcode.png')");
    } catch(err) {
        console.log("Error in generating the qr code: " +err);
    }
};


inquirer
.prompt([{type:"input", name:"text", message:"Enter text to generate qrcode: "}])
.then((answers) => generateQR(answers.text));