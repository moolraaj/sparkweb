const express=require('express')
const server =express()
const allUsers=require('./routes/userRoutes.js')
 
const cors=require('cors')
 
 

server.use(express.json())
server.use(cors())

server.use('/userinformation', allUsers.router )

 server.listen(9200)


 