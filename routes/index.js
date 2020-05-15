
const express = require('express')
const routes = express.Router()
const bidCapRoute = require('./bid-cap.route')

routes.use('/bid-cap', bidCapRoute)

module.exports = routes
