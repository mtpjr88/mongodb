//(run in terminal to start mongo server) ./mongod --dbpath ~/mongo-data

var express = require('express');
var bodyParser = require('body-parser');
var { ObjectID } = require('mongodb');


var { mongoose } = require('./db/mongoose');
var { Todo } = require('./models/todo');
var { User } = require('./models/user');
let { Lamp } = require('./models/lamp');

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

app.post("/lamps", (req, res) => {
     var lamp = new Lamp({
        size: req.body.sizes,
        date: req.body.date,
        outsideDiameter: req.body.outsideDiameter,
        overallLength: req.body.overallLength,
        arcGap: req.body.arcGap,
        comments: req.body.comments
     });

     lamp.save().then((doc) => {
         res.send(doc);
     }, (err) => {
        res.status(400).send(err);
     });
});

//GET route returns get requests
app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({todos});
    },(err) => {
        res.status(400).send(err);
    });
});

//GET route for lamps

app.get('/lamps', (req, res) => {
    Lamp.find().then( (lamps) => {
        res.send({lamps});
    },(err) => res.status(400).send(err));
});

// GET /todos/12341234
app.get('/todos/:id', (req, res)=> {
    let id = req.params.id;

    if(!ObjectID.isValid(id)) return res.status(404).send("Check ID again 'NOT FOUND' ");

    Todo.findById(id).then((todo) => {
        res.send({todo});
    }).catch((err) => res.status(404).send(err));
    
});

app.delete('/todos/:id', (req, res) => {
    let id = req.params.id;
    if(!ObjectID.isValid(id)) return res.status(404).send("Check ID again 'NOT FOUND' ");
    
    Todo.findByIdAndRemove(id).then((doc) => {
        if(!doc) return res.status(404).send(); //not found

        res.send(doc);

    }).catch((err) => res.send(err));      
});



app.listen(3000,() => {
    console.log("Started on Port 3000");
});

module.exports = {app};