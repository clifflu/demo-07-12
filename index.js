const express = require('express')
const request = require('request')

const PORT = process.env['PORT'] || '3000'
const MAGIC_URL = 'http://169.254.169.254/latest/meta-data/public-ipv4'

const app = express()
const myRequest = request.defaults({timeout: 100})

app.get('/ip', (req, res) => {
  myRequest.get(MAGIC_URL, (err, resp, body) => {
    res.json(err
      ? {ip: '0.0.0.0', reason: 'not in AWS'}
      : {ip: body})
  })
})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})
