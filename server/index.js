const http = require("http");
const express = require("express");

const app = express();

const server = http.createServer(app);

app.get("/",(req,resp)=>{
    resp.send(`surver is running`)
})


server.listen(3050,()=>{
    console.log(`http://localhost:3050/`); 
})