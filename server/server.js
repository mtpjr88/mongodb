var express = require('express');
var bodyParser = require('body-parser');


var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();

//parses data in body to json
app.use(bodyParser.json());

//handles POST requests
app.post("/todos", (req,res) => {
    
    var code = new Todo({
        text: req.body.text,
        completed: req.body.completed,
        completedAt: req.body.completedAt
    });

    code.save().then((doc) => {
        res.send(doc);
    }, (error) => {
        res.status(400).send(error);
    });
});

//Get route returns get requests
app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({todos});
    },(err) => {
        res.status(400).send(err);
    });
});

app.listen(3000,() => {
    console.log("Started on Port 3000");
});

module.exports = {app};