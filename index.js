const express = require('express');
require('dotenv').config();
const app = express();


const PORT = process.env.PORT || 4000;

const blogRoute = require('./Routes/Blog');
app.use('/api', blogRoute);

app.listen(PORT, ()=>{
    console.log("Server running at port no: ", PORT);
})

app.get("/", (req,res)=>{
    return res.send(`<h2>This is Homepage</h2>`);
})