// let obj={
//   name:"hellooooo"
// }
// let stringObj=JSON.stringify(obj)
// let reObj=JSON.parse(stringObj)
// console.log(stringObj)
// console.log(typeof stringObj)
// console.log(obj)
// console.log(reObj)

const fs=require('fs')

let originalNote={
  title:'some title n',
  body:'some body'
}
let originalNoteString=JSON.stringify(originalNote)

fs.writeFileSync('notes.json',originalNoteString)

let noteString=fs.readFileSync('notes.json')

let note=JSON.parse(noteString)
console.log(typeof note)
console.log(note.title)
