const express =require('express')
const app=express()
require('./db/mongoos.js')
const taskRouter = require('./routers/task')
const userRouter=require('./routers/user')

const mongoose=require('mongoose')
mongoose.connect('mongodb://127.0.0.1/TaskManagers',{
    useNewUrlParser:true
})

const port=process.env.PORT 
app.use(express.json())


app.use(userRouter)
app.use(taskRouter)


// const jwt = require('jsonwebtoken')

// const myFunction = async () => {
//     const token = jwt.sign({ _id: 'abc123' }, 'gohar', { expiresIn: '7 days' })
//     console.log(token)

//     const data = jwt.verify(token, 'gohar')
//     console.log(data)
// }

// myFunction()






app.listen(port,()=>{
    console.log('server is up' + port)
})