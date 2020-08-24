var express = require("express");
var app = express();

// console.log(__dirname);

// localhost:3000/about
// localhost:3000/
app.get("/", (req, res)=>{
    // res.send("<h1>Home Page</h1>");
    res.sendFile(__dirname+"/home.html");
});

app.get("/about", (req, res)=>{
    res.sendFile(__dirname+"/about.html");
})
app.get("/contact", (req, res)=>{
    res.sendFile(__dirname+"/contact.html");
})



app.listen(3000, ()=>{
    console.log("server running");
});

/*
    1. res.send()       ------------- send data to client
    2. res.sendFile() ------------- send file to client
    3. res.redner() -------------- send file and data both to client
    4. res.redirect() -------------- redirect to another url


*/