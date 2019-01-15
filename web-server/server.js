const express=require('express')
const app=express()

app.get('/', (req, res)=> {
  // res.send('Hello World')
  res.send({
    name:'aaa',
    likes:[1,2,3]
  })
})

app.get('/about',(req,res)=>{
  res.send('about page')
})

app.get('/bad',(req,res)=>{
  res.send({
    message:"unable to fetch"
  })
})

app.listen(3000)
