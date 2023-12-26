const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello My Friend')
})

app.listen(3000)