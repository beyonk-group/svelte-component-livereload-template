import config from 'config'

Object
  .entries(config)
  .forEach(n => {
    process.env[n[0]] = n[1]
  })

  global.fetch = require('node-fetch')