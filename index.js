const express = require('express')
const app = express();
require("dotenv").config()

app.get('/api/get' , (req,res) =>{
    res.send("hello user")
})

app.get('/api/get_user_details' , (req,res) => {
    res.send({
        user:{
            name: "alok sharma",
            age: 30,
            contact : 1234567890
        },env:process.env.NAME
    })
})
app.listen(process.env.PORT, () => {
    console.log(`server is running on ${8000}`)
})