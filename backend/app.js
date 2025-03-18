require('dotenv').config()
const express = require('express')
const app = express()
const postroute = require('./routes/post')
const userRoute = require('./routes/user')
const infoRoute = require('./routes/info')
const connectDB = require('./db/connect')

app.use(express.json())
app.use('/api' , postroute)
app.use('/user' , userRoute)
app.use('/protect' , infoRoute)

app.listen(5000 , () => {
    connectDB(process.env.MONGO_URI)
    console.log('Server Is Listening on port 5000')
})