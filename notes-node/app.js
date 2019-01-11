console.log('starting')

const fs=require('fs')
const os=require('os')

let user=os.userInfo()

fs.appendFile('greeting.txt',`hello ${user.username}`,(err)=>{
  if (err) throw err
  console.log("appended")
})
