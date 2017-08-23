// let MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

let user = {name:'Dimapp',age:32};
let {name} = user;

let objid = new ObjectID();

console.log(objid);

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err){
      return console.log(err);
    }
    else {
      console.log('Success!');
      db.collection('Todos').find(
        {_id: new ObjectID('599de20d9f02a11a48f996af')})
        .toArray().then((data)=>{
        console.log(JSON.stringify(data,undefined,2));
      },(err)=>{
          console.log(err);
      });


      //db.close();
    }
});
