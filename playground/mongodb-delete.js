const { MongoClient, ObjectId } = require('mongodb'); // destructering


MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db) => {
    if(err){
         return console.log(err + " unable to connect to server");
    } console.log("connected to MongoDb Server");

    // delete many
    // db.collection("Todos").deleteMany({text: "something to do"}).then((result)=> {
    //     console.log(result);
    // })

    //delete one
    // db.collection("Todos").deleteOne({task: "pay the bills"}).then((result) => {
    //     console.log(result);
    // });
    
    //find one and delete

    // db.collection("Users").findOneAndDelete({name: "unknown"}).then((result) => {
    //     console.log(result);
    // });

    // db.collection("Users").deleteMany({name: "Michael"}).then((result) => {
    //    console.log(result) 
    // });

    db.collection("Users").findOneAndDelete({_id: new ObjectId("59fe7549211f92040b5a75c6")}).then((result) => {
        console.log(JSON.stringify(result, undefined, 2));
    });
});