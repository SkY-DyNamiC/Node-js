const express =require('express')
const app = express();
const mongoose =require('mongoose')
const path = require('path')
app.use(express.urlencoded({extended: true}));
app.use(express.json());
const PORT =4000

const userModel = require('./model/user')

app.use(express.static(path.join(__dirname, 'auth')))
app.use(express.static(path.join(__dirname, 'public')))

mongoose.connect('mongodb://localhost:27017/project')
.then(()=> console.log("Connected to the database."))
.catch((err)=> console.log("Error connecting the database.", err))

app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, 'auth', 'signup.html'))
})

app.get('/login', (req, res)=>{
    res.sendFile(path.join(__dirname, 'auth', 'login.html'))
})

app.get('/dashboard', (req, res)=>{
    res.sendFile(path.join(__dirname, 'public', 'Landing.html'))
})

app.post('/user', (req, res)=>{
    userModel.create(req.body)
    .then((data)=> res.json(data))
    .catch((err)=> req.json(err))
})


app.listen(PORT, (req,res)=>{
    console.log(`server is running at http://localhost:${PORT}`)
})