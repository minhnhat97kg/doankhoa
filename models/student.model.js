const mongoose = require('mongoose')
const Schema = mongoose.Schema

const schema = Schema({
	id: {
		type: String,
		require: true,
		maxlength: 8,
	},
	firstName: {
		type: String,
		required: true,
	},
	lastName: {
		type: String,
		required: true,
	},
	class: {
		type: Schema.Types.OjectId,
		ref: 'Class',
	},
	history: {
		type: Schema.Types.OjectId,
		ref: 'History',
	},
	gender: {
		type: Boolean,
		required: true,
	},
	DoB: {
		type: String,
		required: true,
	},
	ethnic: {
		type: String,
		required: true,
	},
	phone: {
		type: String,
		required: true,
	},
	address: {
		type: String,
		required: true,
	},
})
module.export = mongoose.model('Student', schema)
