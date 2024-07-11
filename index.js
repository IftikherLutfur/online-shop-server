const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json())
app.use(cors())

app.get('/', (req,res)=>{
    res.send("Jersey Shop is open 24/7")
})
app.listen(port , ()=>{
    console.log(`server in on${port}`)
})