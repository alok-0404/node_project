const express = require('express')
const app = express();

app.get('/api/get' , (req,res) =>{
    res.send("hello user")
})

app.get('/api/get_user_details' , (req,res) => {
    res.send({
        user:{
            name: "alok sharma",
            age: 30,
            contact : 1234567890
        }
    })
})
app.listen(8000, () => {
    console.log(`server is running on ${8000}`)
})