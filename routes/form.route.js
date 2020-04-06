const router = require('express').Router()
const controller = require('../controllers/form.controller')

router.post('/',controller.upload)
router.get('/:id',controller.download)
router.get('/',controller.index)


module.exports = router
