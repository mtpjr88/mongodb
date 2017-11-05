// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectId } = require('mongodb'); // destructering


MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db) => {
    if(err){
         return console.log(err + " unable to connect to server");
    } console.log("connected to MongoDb Server");

    // db.collection("Todos").find({
    //     _id: new ObjectId('59fe7aaec825f6122013f03c')
    // }).toArray()
    //     .then((docs) => {
    //         console.log('Todos');
    //         console.log(JSON.stringify(docs, undefined, 2));

    //     },(err) => {
    //         console.log("Unable to fetch todos", err);
    //     }); 

    // db.collection("Todos").find().count().then((count) => {
    //         console.log(`Todos count: ${count}` );
    //     },(err) => {
    //         console.log("Unable to fetch todos", err);
    //     }); 
        
    db.collection("Users").find({
        name: "Maggie"
    }).toArray().then((docs) => {
        console.log(" Users");
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log("unable to find", err);
    });

        //db.close();
});