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
      db.collection('Todos').insertOne({
         text:'Something to do',
         completed: false
       },(err,result)=>{
         if(err) {
           return console.log('Unable to insert todo',err);
         }
      
         console.log(JSON.stringify(result,undefined,2));
      });

      db.collection('User').insertOne({
        name:'Dmitriy',
        age:32,
        location:'Spb'
      },(err,result)=>{
        if(err){
          return console.log('')
        }
        else {
          console.log(JSON.stringify(result,undefined,2));
        }
      })
      db.close();
    }
})
