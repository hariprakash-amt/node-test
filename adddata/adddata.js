const fs = require('fs');
const chalk = require('chalk')

const addData = (argOne,argTwo) =>{
    const notes = readFile()
    const isDuplicate = notes.find(data=> data.name === argOne)
    const requiredData = notes.find(data=>data.name===argOne)
    console.log("requiredData ==>",typeof requiredData,requiredData)

    debugger
    
    if(!isDuplicate){
        notes.push({
            "name":argOne,
            "age":argTwo,
        })
        writeFile(notes)
        console.log(chalk.green.bold("sucessfully created the notes"))
    }
    else{
        console.log(chalk.red.bold("the name property already exist"))
    }
}
let readFile = () =>{
    try{
        let fileData = fs.readFileSync('text.json').toString()
        return JSON.parse(fileData)
    }catch(e){
        return []
    }
}

const writeFile = (data) => {
    fs.writeFileSync('text.json',JSON.stringify(data))
}



const removeData = (argOne) =>{
    const notes = readFile()
    const requiredData = notes.filter(data=>data.name!=argOne)
    if(notes.length!=requiredData.length){
        writeFile(requiredData)
        console.log(chalk.green.bold(`${argOne} removed sucessfully`))
    }else{
        console.log(chalk.yellow.bold(`${argOne} not present in the file`))
    }
}

const listNotes = () =>{
    const notes = readFile()
    console.log(`Your notes list`)
    notes.map(note=>console.log(note.name))
}

const readNotes = (argOne) =>{
    const notes = readFile()
    const notesCopy = notes.find(note=>argOne===note.name)
    if(notesCopy){
        console.log(chalk.blue.bold(notesCopy.name))
        console.log(chalk.magenta(notesCopy.age))
    }else{
        console.log(chalk.red.bold(`${argOne} is not available in notes`))
    }
}
module.exports = {addData,removeData,listNotes,readNotes}