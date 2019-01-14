console.log('starting notes.js')
let fs=require('fs')

let addNote=(title,body)=>{
  let notes=[];
  let note={
    title,
    body
  };
  notes.push(note)
};






module.exports={
  addNote
}
