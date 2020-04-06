const router = require('express').Router()
const controller = require('../controllers/form.controller')

router.post('/',controller.upload)
router.get('/:id',controller.download)
router.get('/',controller.index)
router.delete('/:id',controller.delete)

module.exports = router
