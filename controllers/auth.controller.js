const Joi = require('joi')
const ErrorHandler = require('../helpers/error')
const passport = require('passport')
const bcrypt = require('bcrypt')
const config = require('../config/config')
const jwt = require('jsonwebtoken')
const User = require('../models/user.model')

module.exports.register = async (req, res, next) => {
	User.create(req.body, (err, user) => {
		if (err)
			return next(
				new ErrorHandler(403, 'Error when create user, try again')
			)
		//Success
		res.json(user)
	})
}

module.exports.login = (req, res, next) => {
	const generateToken = (user) => {
		const payload = JSON.stringify(user)
		return jwt.sign(payload, config.jwtSecret)
	}

	passport.authenticate('login', (err, user, info) => {
		if (err) {
			return next(new ErrorHandler(401, err))
		}
		//Send error message
		if (!user) return next(new ErrorHandler(401, 'Unauthorized'))
		let token = generateToken(user._id)
		res.status(200).json({ user, token })
	})(req, res, next)
}
