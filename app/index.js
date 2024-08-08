const express = require('express')
const app = express()
const port = 9001
const ip = require('ip')

app.get('/', (req, res) => {
  res.send(`Hello World! from kubernetes: ${ip.address}`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${ip.address} ${port}`)
})