const ErrorHandler = require('../helpers/error')
const Model = require('../models/form.model')
const formidable = require('formidable')
const _ = require('lodash')
const fs = require('fs')

module.exports.upload = (req, res, next) => {
	let model
	const form = formidable({
		multiples: true,
		uploadDir: __basedir + '/upload/',
	})

	form.on('file', (filename, file) => {
		model = Model(file.toJSON())
	})

	form.parse(req, (err, field, files) => {
		if (err) throw new ErrorHandler(400, err)
		//Add title to Model instance
		model.title = field.title
		model.save((err, data) => {
			if (err)
				fs.unlink(data.path, (err) => {
					if (err) {
						throw new ErrorHandler(400, err)
					}
				})
			res.json({ data })
		})
	})
}

module.exports.download = (req, res, next) => {
	Model.findById(req.params['id'], (err, data) => {
		if (err) next(err)
		if (data.path) res.download(data.path, data.name)
		else throw new ErrorHandler(400, err)
	})
}
module.exports.index = (req, res, next) => {
	Model.find({}, (err, data) => {
		if (err) throw new Error('Internal server error')
		res.json(data)
	})
}
