const express=require('express')
const hbs=require('hbs')

const app=express()

hbs.registerPartials(__dirname+'/views/partials')
app.set('view engine',hbs)
app.use(express.static(__dirname+'/public'))

app.use((req,res,next)=>{
  let now= new Date().toString();
  console.log(`${now}`)
  next()
})

hbs.registerHelper('getCurrentYear',()=>{
  return new Date().getFullYear()
})

hbs.registerHelper('screamIt',(text)=>{
  return text.toUpperCase()
})

app.get('/', (req, res)=> {
  // res.send('Hello World')
  res.render('home.hbs',{
    pageTitle:'Home Page',
    message:'welcome to node'
  })
})

app.get('/about',(req,res)=>{
  res.render('about.hbs',{
    pageTitle: 'About Page',
  })
})

app.get('/bad',(req,res)=>{
  res.send({
    message:"unable to fetch"
  })
})

app.listen(3000,()=>{
  console.log('server is up on port 3000')
})
