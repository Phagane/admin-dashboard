const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cors = require('cors')
const morgan = require('morgan')
const authRouter = require('./routes/authRouter')

dotenv.config({path: './config/config.env'})
const app = express()

app.use(express.json())

if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'))
}

app.use(cors({
    origin:'http://localhost:3001',
    method: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    credentials:true
}))

const DB = process.env.DATABASE.replace('<db_password>', process.env.DATABASE_PASSWORD)

mongoose.connect(DB, {
    useNewUrlParser:true,
}).then(con=>{
    console.log('DB connection successful')
})

app.get('/', (req, res) =>{
    res.status(200).json({
        status: 'success',
        message: 'connection successful'
    })
})

app.options('*', cors())
app.use('/admin', authRouter)

const port = process.env.port

app.listen(port, ()=>{
    console.log(`Server running on port ${port}`)
})