const router = require('express').Router()
const controller = require('../controllers/event.controller')

router.get('/',controller.index)
router.get('/:code',controller.event)
router.post('/',controller.create)
router.delete('/:code',controller.delete)
router.patch('/:code',controller.update)

module.exports = router