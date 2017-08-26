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
      // deleteMany
      // db.collection('Todos').deleteMany({text:'Eat lanch'}).then((result)=>{
      //   console.log(result);
      // },(err)=>{
      //   console.log(err);
      // });

      //deleteOne
      // db.collection('Todos').deleteOne({text:'Eat lanch'}).then((result)=>{
      //   console.log(result);
      // },(err)=>{
      //   console.log(err);
      // })


      //findOneAndDelete
      db.collection('Todos').findOneAndDelete({completed:false}).then((result)=>{
        console.log(result);
      })

      db.collection('User').deleteMany({name:'Andrew'}).then((result)=>{
        console.log(result);
      });

      db.collection('User').findOneAndDelete({_id:new ObjectID("599f390608e287ba3c15deea")}).then((result)=>{
        console.log(result);
      })
      //db.close();
    }
});
