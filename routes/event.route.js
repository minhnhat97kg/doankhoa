const router = require('express').Router()
const controller = require('../controllers/event.controller')

router.get('/', controller.index)
router.get('/:id', controller.event)
router.post('/', controller.create)
router.delete('/:id', controller.delete)
router.patch('/:id', controller.update)

module.exports = router

