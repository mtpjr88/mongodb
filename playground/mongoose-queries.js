const { mongoose } = require('./../server/db/mongoose');

const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

const { ObjectID } = require('mongodb');

// var id = '5a012f90b75219ad0fd052ef';

// if(!ObjectID.isValid(id)){
//     console.log("ID not valid");
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//      console.log("Todos", todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log("Todo", todo);
// });

// Todo.findById(id).then((todo) => {
//     if(!todo){
//         return console.log('ID not found');
//     }
//     console.log("todo", todo);
// }).catch((err) => console.log(err));

let id = '59ffde5aa8545d13064e93ab';

User.findById(id).then((user) => {

    if(!user) return console.log('ID not found');
    console.log(`User found!`);
    console.log(JSON.stringify(user, undefined, 2));
    
}, (err) => console.log(err));