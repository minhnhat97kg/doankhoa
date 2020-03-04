const router = require('express').Router()
const controller = require('../controllers/auth.controller')
const passport = require('passport')

router.post('/register', controller.register)
router.post('/login', controller.login)

module.exports = router;
