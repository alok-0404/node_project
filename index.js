const express = require('express')
const app = express();

app.get('/api/get' , (req,res) =>{
    res.send("hello user")
})
app.listen(8000, () => {
    console.log(`server is running on ${8000}`)
})