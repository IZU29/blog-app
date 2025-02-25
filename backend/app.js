const express = require('express')
const app = express()
const postroute = require('./routes/post')
const userRoute = require('./routes/user')

app.use(express.json())
app.use('/api' , postroute)
app.use('/user' , userRoute)

app.listen(5000 , () => {
    console.log('Server Is Listening on port 5000')
})