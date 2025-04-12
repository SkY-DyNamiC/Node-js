const express =require('express')
const mongoose =require('mongoose')

const app =express()
const PORT =4000

app.get('/hello', (req, res)=>{
    res.send("Hello the server is ready");
})

app.listen(PORT, (req,res)=>{
    console.log(`server is running at http://localhost:${PORT}`)
})