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

      db.collection('Todos').findOneAndUpdate({_id:new ObjectID("59a15fe4b78e1b21df3b0c34")},{
        $set:{
          completed:true
        },
      },{
        returnOriginal:false
      }).then((result)=>{
        console.log(result);
      })

      db.collection('User').findOneAndUpdate({_id:new ObjectID("599f391608e287ba3c15deeb")},
       {$set:{
         name:'Dmitriy'
        },
       $inc:{age:1} },{
         returnOriginal:false
       }).then((result)=>{
         console.log(result);
       })

      //db.close();
    }
});
