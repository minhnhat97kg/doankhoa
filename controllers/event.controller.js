const ErrorHandler = require('../helpers/error')
const Model = require('../models/event.model')
const _ = require('lodash')
var assert = require('assert')

module.exports.index = (req, res) => {
	Model.find({})
		.then((data) => {
			return res.status(200).json(data)
		})
		.catch((e) => {
			throw new ErrorHandler(400, message)
		})
}
module.exports.create = (req, res) => {
	Model.create(req.body)
		.then((model) => {
			res.status(200).json({ error: false, data: model })
		})
		.catch((err) => {
			let messages = _.flatMap(err.errors, (value, key) => {
				return { type: key, msg: value.message }
			})
			throw new ErrorHandler(400, message)
		})
}
module.exports.update = (req, res) => {
	res.send('update')
}
module.exports.delete = (req, res) => {
	res.send('delete')
}
module.exports.event = (req, res) => {
	Model.findOne({ code: req.params['code'] }, (err, data) => {
		if (err) throw err
		res.json(data)
	})
}
