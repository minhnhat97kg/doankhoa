var express = require('express');

module.exports = (app) => {
    app.use('/', require('../objects/auth'));
    app.use('/user', require('../objects/user'));
}