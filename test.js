const fs = require('fs');

const bufferData = fs.readFileSync('text.json')
const dataJSON = bufferData.toString()
let data =JSON.parse(dataJSON)
// console.log("Bufferdata=>",data)

data.name='hariprakash'
data.age="25"
data.place="selam"
JSONdata =JSON.stringify(data)
console.log("Bufferdata=>",JSONdata)

fs.writeFileSync("text.json",JSONdata)

// const bufferDatas = fs.readFileSync('text.json')
// const datasJSON = bufferDatas.toString()
// const datas =JSON.parse(datasJSON)
