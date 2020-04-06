var createError = require('http-errors')
var express = require('express')
var path = require('path')
var cookieParser = require('cookie-parser')
var logger = require('morgan')
var app = express()
var bodyParser = require('body-parser')
var passport = require('./passport')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(logger('dev'))
app.use(passport.initialize())

// catch 404 and forward to error handler

module.exports = app
