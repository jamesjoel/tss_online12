var express = require("express");
var app = express();
var MongoClient = require('mongodb').MongoClient;
var mongodb = require("mongodb");
var bodyParser = require("body-parser");
var cors = require("cors");

app.use(cors());
app.use(bodyParser());


app.get("/api/student", (req, res)=>{
    MongoClient.connect("mongodb://localhost:27017", (err, con)=>{
        var db = con.db("mydb");
        db.collection("student").find().toArray((err, result)=>{
            res.send(result);
        });
    }); 
});
app.put("/api/student/:id", (req, res) => {
    var id = req.params.id;
    console.log(req.params);
    var obj = req.body;
    // console.log(req.body);
    id = mongodb.ObjectId(id);

    delete req.body._id;
    MongoClient.connect("mongodb://localhost:27017", (err, con) => {
        var db = con.db("mydb");
        db.collection("student").update({_id : id}, {$set : req.body}, (err, result)=>{
            obj._id = id;
            res.send(obj);

        });
    });
});



app.listen(3000, function () {
    console.log("server running");
});