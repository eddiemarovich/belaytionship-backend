'use strict'

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const morgan = require('morgan')

const port = process.env.PORT || 3000

app.disable('x-powered-by')
app.use(bodyParser.json())
app.use(cookieParser())

app.use(express.static('public'))

const users = require('./routes/users')
const likes = require('./routes/likes')
const messages = require('./routes/messages')

app.use(users)
app.use(likes)
app.use(messages)


app.use((req, res, next) => {
  res.sendStatus(404)
})

app.use((err, req, res, next) => {
  const status = err.status || 500
  res.status(status).send(err.message)
})

app.listen(port, () => console.log(`Listening on port ${port}`))

module.exports = app
