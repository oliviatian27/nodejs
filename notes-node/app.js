console.log('starting app.js')

// const fs=require('fs')
// const os=require('os')
// const notes=require('./notes.js')
//
// const add=notes.add
// console.log(add(1,5))
//
// const _=require('lodash')
//
// console.log(_.isString('ttt'))
// console.log(_.uniq([1,2,1]))
// let user=os.userInfo()
//
// fs.appendFile('greeting.txt',`hello ${user.username} !`,(err)=>{
//   if (err) throw err
//   console.log("appended")
// })

let command=process.argv[2]
console.log('command: ',command)
