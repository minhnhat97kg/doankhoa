const ErrorHandler = require('../helpers/error')
const Model = require('../models/event.model')
const _ = require('lodash')
var assert = require('assert')

module.exports.index = (req, res, next) => {
	Model.find({})
		.then((data) => {
			return res.status(200).json(data)
		})
		.catch((e) => {
			return next(new ErrorHandler(400, message))
		})
}
module.exports.create = (req, res, next) => {
	Model.create(req.body, (err, data) => {
		if (err) {
			let messages = _.flatMap(err.errors, (value, key) => {
				return { type: key, msg: value.message }
			})
			return next(new ErrorHandler(400, { messages, err }))
		}
		res.status(200).json(data)
	})
}
module.exports.update = (req, res, next) => {
	res.send('update')
}
module.exports.delete = (req, res, next) => {
	Model.findByIdAndDelete(req.params['id'], (err) => {
		if (err) return next(new ErrorHandler(400, err))
		res.status(200).json({ message: 'Deleted' })
	})
}
module.exports.event = (req, res, next) => {
	Model.findById(req.params['id'], (err, data) => {
		if (err) return next(new ErrorHandler(400, err))
		res.status(200).json({ data })
	})
}
