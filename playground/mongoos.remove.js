var { ObjectID } = require('mongodb');

var { mongoose } = require('./../server/db/mongoose');
var { Todo } = require('./../server/models/todo');
var { User } = require('./../server/models/user');
let { Lamp } = require('./../server/models/lamp');

Todo.remove().then((result) => {
    console.log(result);
})


//Todo.findByIdAndRemove('5a08e892972270fa05fd2c69').then((todo) => console.log(todo));
//Todo.findOneAndRemove()