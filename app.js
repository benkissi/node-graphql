const express = require('express')
const graphqlHTTP = require('express-graphql')
const schema = require('./schema/schema')
const mongoose = require('mongoose')
const cors = require('cors');
require('dotenv').config()

const  app = express()


//allow cross-origin requests
app.use(cors())

mongoose.connect(process.env.MONGODB_URL)
mongoose.connection.once('open', () => {
    console.log('connected to database')
})

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))

app.listen(4000, ()=> {
    console.log('listening on port 4000')
})