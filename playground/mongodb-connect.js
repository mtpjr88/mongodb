// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectId } = require('mongodb'); // destructering


MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db) => {
    if(err){
         return console.log(err + " unable to connect to server");
    }
        console.log("connected to MongoDb Server");

    //  db.collection("Todos").insertOne({
    //     text: "something to do",
    //     completed: "false"
    //  }, (err,result) => {
        
    //     if(err) {
    //         return console.log("Unable to insert todo", err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    //  });

    // Insert a new collection 'Users'
    // db.collection("Users").insertOne({
    //     name: "Michael",
    //     age: 29 ,
    //     location: "Ripon, CA"
    // }, (err, result) => {
        
    //     if (err) return console.log("Unable to insert Users", err);
        
    //     console.log(result.ops[0]._id.getTimestamp());
    // });

    // db.close(); //closes the connection
});



