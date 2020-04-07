const mongoose = require('mongoose')
mongoose.Promise = Promise
mongoose.set('useCreateIndex', true)
var mongooseOptions = { useNewUrlParser: true, useUnifiedTopology: true }
console.log('Connecting to mongo...')
mongoose.connect(
	'mongodb://localhost:27017/doankhoa',
	mongooseOptions,
	function (err) {
		if (err) {
			console.error('System could not connect to mongo server.')
			console.log(err)
		} else {
			console.log('System connected to mongo server.')
		}
	}
)
