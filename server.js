const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const config = require('./config')
//let q;
//let query = new Query();
const dbInit = require('./db')
const app = express()

app.use(express.static('public'))
app.use(cors())

app.use((req, res, next) => {
  const token = req.get('Authorization')

  if (token) {
    req.token = token
    next()
  } else {
    res.status(403).send({
      error: 'Please provide an Authorization header to identify yourself (can be whatever you want)'
    })
  }
})

app.get('/', (req, res) => {
    res.send({status: 200, data:'it works'})
})

app.post('/sql', bodyParser.json(), (req, res) => {
  console.log("In api: "+req.body);
  let {fn, params} = req.body;
  q[fn](...params)
  .then((data)=>{
    res.status(200).send(data)
  })
})

dbInit()
.then(()=>{
  app.listen(config.port, () => {
    console.log('Server listening on port %s, Press Ctrl+C to stop', config.port)
  })
})
