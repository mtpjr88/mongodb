const { MongoClient, ObjectId } = require('mongodb'); // destructering


MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db) => {
    if(err){
         return console.log(err + " unable to connect to server");
    } console.log("connected to MongoDb Server");

    db.collection("Users").findOneAndUpdate({_id: new ObjectId("59fe76b9c8e8de0419a5688e")}
    , {
        $set: {
            name: "Maggie"
        },
        $inc: {
            age: -28
        }
    },{
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });
     
});
