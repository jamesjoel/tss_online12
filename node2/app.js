var express = require("express");
var app = express();

app.get("/", (req, res)=>{
    res.send("<h1>hello</h1>");
});

app.get("/about", (req, res)=>{
    res.send("<h2>this is about page</h2>");
})




app.listen(3000, ()=>{
    console.log("server ********* running");
});