const express = require('express')
const app = express()
const port = 3000

app.get('/',(req,res) => {
    res.send(`
        <h1>This is my Docker Image</h1>
        <h2>Look at my <a href="https://github.com/mateusfaustino">Github repository</a><h2/>
    `)
})

app.listen(port,()=>{
    console.log(`Running in http://localhost:${port}/`);
})