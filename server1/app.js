var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var cors = require("cors");
var jwt = require("jsonwebtoken");

var mysql = require('mysql');
var fileupload = require("express-fileupload");

app.use(express.static(__dirname+"/public"));

app.use(cors());
app.use(fileupload());


var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "angular"
});


app.use(bodyParser());
app.use(cors());

app.get("/api/verifytoken", function(req, res){
    
    if(req.headers.authorization){
        if(req.header.authorization != ""){
            var token = req.headers.authorization;
            jwt.verify(token, "this is my secret key", (payload)=>{

                if (payload){
                    console.log("correct");
                    res.status(200).send({
                        success: true,
                        msg: "Correct Token"
                    });
                }else {
                    

                    console.log("wrong");
                    res.status(401).send({
                        success: false,
                        msg: "Wrong Token"
                    })
            }
            });
        }
        else {
            res.status(401).send({
                success: false,
                msg: "Wrong Token"
            })
        }
    }
    else{
        res.status(401).send({
            success : false,
            msg : "Wrong Token"
        })
    }
});








function backdoor(req, res, next) {
    console.log("--------------",req.headers);
    if (!req.headers.authorization) {
        res.status(401).send({ msg: "Unathorized User" });
    }
    else {
        if (req.headers.authorization == "") {
            res.status(401).send({ msg: "Unathorized User" });

        }
        else {
            var token = req.headers.authorization;
            var userInfo = jwt.verify(token, "this is my secret key");
            if (!userInfo) {
                res.status(401).send({ msg: "Unathorized User" });

            }
            else {
                console.log("--------------------------------", userInfo);
                req.userData = userInfo;
                next();
            }
        }
    }
}





app.post("/api/login", function (req, res) {
    var u = req.body.username;
    var p = req.body.password;
   
    con.query("SELECT * FROM user1 WHERE username='"+u+"'", function (err, result) {
      if(err){
          return;
      }
      if(result.length>=1) {
          
          result = JSON.parse(JSON.stringify(result))
          
           if(result[0].password == p)
           {
            //    console.log("%%%%%%%%%%%55", result);
            var token = jwt.sign({ id: result[0].id }, "this is my secret key", { expiresIn: 3600 });
                  res.status(200).send({
                            success: true,
                            token
                        });
            } else {
                        res.status(401).send({
                            success: false,
                            msgType: 2
                        })
            }
        } else {
                    res.status(401).send({
                        success: false,
                        msgType: 1
                    })
          }
          
    
  });
});
app.listen(3000, function () {
    console.log("server running");
});

/*
$name = $_FILES[''][''];
$tmp_name = $_FILES[''][''];

move_uploaded_file($tmp_name, "upload/".$name);
*/

/*
<form action="save.php" method="post">


    <submit>Save</submit>
</form>



*/

/*
save.php


$_POST[];


*/