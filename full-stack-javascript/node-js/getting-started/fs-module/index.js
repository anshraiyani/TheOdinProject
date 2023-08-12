import fs from 'fs'

// const txt=fs.readFileSync('sample.txt','utf-8')
fs.readFile('sample.txt','utf-8',(err,txt)=>{
    console.log(txt)
})
console.log(2-3)