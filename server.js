var HTTP_PORT = process.env.PORT || 8080;
const express = require("express");
const path = require("path");
const fs = require("fs");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());
app.use(express.static('public'));

app.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname + '/views/home.html'));
})

app.get("/registration", (req, res)=>{
    res.sendFile(path.join(__dirname + '/views/registration.html'));
})

app.post("/registration", (req, res)=>{
    data_module.formValidation(req.body)
    .then((data)=>{
        console.log("Data added");
    }).catch((err)=>{
        console.log("Not works");
    })
})


app.listen(HTTP_PORT, function(){
    console.log("App listening on: " + HTTP_PORT);
});

