const express = require('express')
const app = express()

app.use(express.json())

const {
  create,
  read,
  update,
  del,
} = require('./controllers/messagesController')

//api serves front end files
app.use(express.static(__dirname + '/../public/build'))

//endPoints
const messagesBaseUrl = '/api/messages'
app.get(messagesBaseUrl, read)
app.post(messagesBaseUrl, create)
app.put(`${messagesBaseUrl}/:id`, update)
app.delete(`${messagesBaseUrl}/:id`, del)

app.listen(3001, () => console.log('Listening on port 3001...'))
