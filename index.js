const express = require('express')
const app = express()
const port = 3000
const loaders = require('./loaders')

async function startServer() {

  // Initialiez application
  loaders(app)

  // Start server
  app.listen(port, () => {
    console.log(`Server listening on PORT ${port}`)
  })
}

startServer();