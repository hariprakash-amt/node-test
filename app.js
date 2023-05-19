const addFile = require('./adddata/adddata')
const fs = require("fs");
const validator = require('validator');
const chalk = require("chalk")


// fs.writeFileSync("notes.md","this file created by node js")
// fs.appendFileSync("notes.md"," this is an append file")
// console.log(chalk.bold.green("I am chalk"))

// console.log("first")
// console.log("second")

let command = process.argv[2]
let argOne = process.argv[3]
let argTwo = process.argv[4]

if(command==="add"){
    addFile.addData(argOne,argTwo)
    console.log("object");
}

if(command == "remove"){
    addFile.removeData(argOne)
}

if(command == "list"){
    addFile.listNotes()
}

if(command == "read"){
    addFile.readNotes(argOne)
}
