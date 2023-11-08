const express = require('express');
const app =express();


app.use(express.json())

app.use(express.urlencoded())

app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/landing-page.html')

})

app.listen(3000)