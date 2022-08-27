const mongodb=require('mongodb')
const mongoClient=mongodb.MongoClient

const connectionURL='mongodb://127.0.0.1:27017'
const databaseName="task-Manager"


mongoClient.connect(connectionURL,{useNewUrlParser:true},(error ,client)=>{
    if(error){
       
        return console.log('error occuredd')
    }
    const db=client.db(databaseName)
   
    // db.collection('users').insertOne({
    //     name:'Gohar',
    //     age:21
    // },(error,result)=>{
    //     if(error){
    //         return console.log('unable to insert data')
    //     }
    //     console.log("data is ",result.insertedId)
    // })
    // db.collection('users').insertMany([{
    //     name:'Faryal',
    //     age:21
    // },{
    //     name:'Alishba',
    //     age:21
    // }],
    // (error,result)=>{
    //     if(error){
    //         return console.log('unable to insert data')
    //     }
    //     console.log("data is ",result.insertedIds)
    // })

    // ----------------Inserting Data----------------------
    db.collection('Task').insertMany([{
        Title:'coding',
        dsc:'Complete node.js',
        status:true
    },{
        Title:'SLEEP',
        dsc:'Complete your 8 hours sleep',
        status:true
    },{
        Title:'timesheet',
        dsc:'Complete timesheet',
        status:false
    }],
    (error,result)=>{
        if(error){
            return console.log('unable to insert data')
        }
        console.log("data is ",result.insertedIds)
    })
})

//------------------------find Data--------------
mongoClient.connect(connectionURL,{useNewUrlParser:true},(error ,client)=>{
    if(error){
        return console.log('error occuredd')
    }
    const db=client.db(databaseName)

db.collection('Task').findOne({Title:'coding'},(error,result)=>
{
if(error){
    return console.log('unable to fetch data')
}
console.log(result)
})
db.collection('users').find({age:21}).toArray((error,result)=>{
    console.log(result) 
})
db.collection('users').countDocuments({ age: 21 }, (err, count) => {
    console.log(count)
})
})
//---------------------------updating Dataa--------------------------------------------------------
mongoClient.connect(connectionURL,{useNewUrlParser:true},(error ,client)=>{
    if(error){
        return console.log('error occuredd')
    }
    const db=client.db(databaseName)
   const updatePromise= db.collection('users').updateMany({name:'Gohar'},{
    $set:{
        name:'dead'
    }
    })
    updatePromise.then((result)=>{
        console.log(result)
    }).catch((error)=>{
        console.log(error)
    })
})
//---------------------------------Deleting Dataa------------------------------------------
mongoClient.connect(connectionURL,{useNewUrlParser:true},(error ,client)=>{
    if(error){
        return console.log('error occuredd')
    }
    const db=client.db(databaseName)
    db.collection('users').deleteMany({name:'dead'}).then((result)=>{
        console.log(result)
    }).catch((error)=>{
      console.log(error)
    })
})