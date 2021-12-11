const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const apiRout = require('./api')

module.exports = (url) => {
  const app = express()
  const baseUrl = path.join(__dirname, '../')

  app.use(express.static(path.join(baseUrl, 'dist')))
  app.use(bodyParser.json())
  app.use('/api/posts', apiRout)

  app.listen(url, () => {
    console.log('Project started on http://localhost:8080/')
  })

  app.get('*', (req, res) => {
    res.sendFile(`${baseUrl}/index.html`)
  })
}
