const router = require('express').Router()
const controller = require('./controller')
const passport = require('passport')

router.post('/register', controller.register)
router.post('/login', passport.authenticate('login'), controller.login)

module.exports = router;