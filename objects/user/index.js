const router = require('express').Router()
const controller = require('./controller')
const passport = require('passport')
router.use(passport.authenticate('jwtAuth', { session: false }))
router.get('/', (req, res) => {
    res.send(req.user)
})

module.exports = router;