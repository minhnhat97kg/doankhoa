const router = require('express').Router()
const controller = require('../controllers/student.controller')
const passport = require('passport')
router.get('/',controller.index)

module.exports = router;
