// const mongoose=require('mongoose')
// mongoose.connect('mongodb://127.0.0.1/task-Manager-API',{
//     useNewUrlParser:true
// })

// const User=mongoose.model('User',{
//     desc:{
//         type:String
//     },
//     completed:{
//         type:Boolean
//     }

    
// })
// new User({
//     desc:'sleeping',
//     completed:false
// }).save().then((result)=>{
//     console.log(result)
// }).catch((error)=>{
//     console.log(error)
// })
// const mongoose=require('mongoose')
// mongoose.connect('mongodb://127.0.0.1/task-Manager-API',{
//     useNewUrlParser:true
// })

// const User=mongoose.model('User',{
//     Name:{
//         type:String
//     },
//     password:{
//         type:String,
//         required:true,
//         trim:true,
//         minlength:6,
//         validate(value){
//             if(value.includes('password')){
//                 console.log('password cant have password in it')
//             }
//         }
//     }

    
// })
// new User({
//     Name:'sleena',
//     password:'jk'
// }).save().then((result)=>{
//     console.log(result)
// }).catch((error)=>{
//     console.log(error)
// })
const mongoose=require('mongoose')
mongoose.connect(process.env.MONGODB_URL,{
    useNewUrlParser: true

})

// const User=mongoose.model('Task',{
//     desc:{
//         type:String,
//         trim:true,
//         required:true,

//     },
//     completed:{
//         type:Boolean,
//         default:false
//     }

    
// })
// new User({
//     desc:'coding'
// }).save().then((result)=>{
//     console.log(result)
// }).catch((error)=>{
//     console.log(error)
// })